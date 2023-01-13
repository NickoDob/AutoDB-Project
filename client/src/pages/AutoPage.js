import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneAuto} from "../http/autoAPI";

const AutoPage = () => {
    const [auto, setAuto] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneAuto(id).then(data => setAuto(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + auto.img}/>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-left justify-content-around"
                        style={{width: 600, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>Номер: {auto.num}</h3>
                        <h3>Цвет: {auto.color}</h3>
                        <h3>Выпуск от: {auto.created} года.</h3>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {auto.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default AutoPage;
