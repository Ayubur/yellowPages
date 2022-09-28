import React from "react";
import { Row, Col, Card } from 'react-bootstrap';

function Lists({ data }) {
    return (
        data.map((el, i) => (
            <Col lg={4} md={4} sm={4} key={i}>
                <div className="mt-2">
                    <Card>
                        <Card.Body>
                            <h4>{el?.name}</h4>
                            <div>
                                Email : {el?.email}
                            </div>
                            <div>
                                Phone : {el?.phone}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        ))
    )
}

export default Lists;