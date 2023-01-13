import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateMark from "../components/modals/CreateMark";
import CreateAuto from "../components/modals/CreateAuto";


const Admin = () => {
    const [markVisible, setMarkVisible] = useState(false)
    const [autoVisible, setAutoVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setMarkVisible(true)}
            >
                Добавить марку
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setAutoVisible(true)}
            >
                Добавить автомобиль
            </Button>
            <CreateMark show={markVisible} onHide={() => setMarkVisible(false)}/>
            <CreateAuto show={autoVisible} onHide={() => setAutoVisible(false)}/>
        </Container>
    );
};

export default Admin;
