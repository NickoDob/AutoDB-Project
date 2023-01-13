import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createMark} from "../../http/autoAPI";

const CreateMark = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addMark = async() => {
        try{
            createMark({name: value}).then(data => {
                setValue('')
                onHide()
            })
        }catch (e) {
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
                    Добавить марку автомобиля
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название марки"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addMark}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateMark;
