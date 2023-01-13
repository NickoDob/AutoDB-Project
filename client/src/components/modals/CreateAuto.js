import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createAuto, fetchMarks, fetchAutos} from "../../http/autoAPI";
import {observer} from "mobx-react-lite";

const CreateAuto = observer(({show, onHide}) => {
    const {auto} = useContext(Context)
    const [num, setNum] = useState('')
    const [color, setColor] = useState('')
    const [created, setCreated] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchMarks().then(data => auto.setMarks(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addAuto = () => {
        try{
            const formData = new FormData()
            formData.append('num', num)
            formData.append('color', color)
            formData.append('created', created)
            formData.append('img', file)
            formData.append('markId', auto.selectedMark.id)
            formData.append('info', JSON.stringify(info))
            createAuto(formData).then(data => onHide())
        }catch(e){
            alert(e.response.data.message)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить автомобиль
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{auto.selectedMark.name || "Выберите марку автомобиля"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {auto.marks.map(mark =>
                                <Dropdown.Item
                                    onClick={() => auto.setSelectedMark(mark)}
                                    key={mark.id}
                                >
                                    {mark.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={num}
                        onChange={e => setNum(e.target.value)}
                        className="mt-3"
                        placeholder="Введите номер автомобиля"
                    />
                    <Form.Control
                        value={color}
                        onChange={e => setColor(e.target.value)}
                        className="mt-3"
                        placeholder="Введите цвет автомобиля"
                    />
                    <Form.Control
                        value={created}
                        onChange={e => setCreated(e.target.value)}
                        className="mt-3"
                        placeholder="Введите год выпуска автомобиля"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить дополнительные сведения
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addAuto}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateAuto;
