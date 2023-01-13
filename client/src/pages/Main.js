import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MarkBar from "../components/MarkBar";
import AutoList from "../components/AutoList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchMarks, fetchAutos} from "../http/autoAPI";
import Pages from "../components/Pages";

const Main = observer(() => {
    const {auto} = useContext(Context)

    useEffect(() => {
        fetchMarks().then(data => auto.setMarks(data))
        fetchAutos(null, 1, 2).then(data => {
            auto.setAutos(data.rows)
            auto.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchAutos(auto.selectedMark.id, auto.page, 2).then(data => {
            auto.setAutos(data.rows)
            auto.setTotalCount(data.count)
        })
    }, [auto.page, auto.selectedMark,])

    return (
        <Container>
            <Row className="mt-2">
                <Col>
                    <MarkBar/>
                    <AutoList/>
                    <Pages/>

                        <h2>Статистика базы:</h2>
                        <li><b>Количество записей: </b> {auto.autos.length}</li>

                        
                </Col>
            </Row>
        </Container>
    );
});

export default Main;
