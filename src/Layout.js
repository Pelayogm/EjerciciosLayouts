import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

function MyGrid() {
    return (
        <Container style={{backgroundImage: "url('background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center center'}}>
            <Row>
                <Col sm={12} md={6} lg={3}>
                    <div>Mujer</div>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <div>Hombre</div>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <div>Niños</div>
                </Col>
            </Row>
        </Container>
    );
}

export default MyGrid;