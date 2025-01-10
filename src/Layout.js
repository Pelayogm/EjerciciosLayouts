import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

function MyGrid() {
    return (
        <Container>
            <Row>
                <Col sm={12} md={6} lg={3}>
                    <div style={{backgroundImage: "url('background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center center'}}>Mujer</div>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <div style={{backgroundImage: "url('background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center center'}}>Hombre</div>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <div style={{backgroundImage: "url('background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center center'}}>Niños</div>
                </Col>
            </Row>
        </Container>
    );
}

export default MyGrid;