import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const MarkBar = observer(() => {
    const {auto} = useContext(Context)

    return (
        <Row className="d-flex">
            {auto.marks.map(mark =>
                <Card
                    style={{cursor:'pointer'}}
                    key={mark.id}
                    className="p-3"
                    onClick={() => auto.setSelectedMark(mark)}
                    border={mark.id === auto.selectedMark.id ? 'danger' : 'light'}
                >
                    {mark.name}
                </Card>
            )}
        </Row>
    );
});

export default MarkBar;
