import { Container, Row, Col, Stack, Image } from 'react-bootstrap';
import React from 'react';

function YouTube() {

    return (
        <Container>
            <Stack gap={5}>
            <Row>
                <Col md={7} lg={7}>
                    <div>
                        <Image src='Leon.jpg' alt='SEAT Leon' fluid/>
                    </div>
                </Col>
                
                <Col md={4} lg={4}>
                <Stack gap={3}>
                    <div>
                        <Image src='Clio.jpg' alt='Renault Clio' fluid/>
                    </div>
                    <div>
                    <Image src='Fabia.jpg' alt='Skoda Fabia' fluid/>
                    </div>
                </Stack>
                </Col>

                <Col md={1} lg={1}>
                    <Stack>
                        <div>
                            <h3 style={{fontSize: '19px', textAlign: 'left'}}>Renault Clio Williams I.</h3>
                            <p style={{fontSize: '17px', textAlign: 'left'}}>Procedente de la colección de Renault.</p>
                        </div>
                        <div>
                            <h3 style={{fontSize: '19px', textAlign: 'left'}}>Skoda Fabia IV.</h3>
                            <p style={{fontSize: '17px', textAlign: 'left'}}>Nuevo Fabia, nueva prueba.</p>
                        </div>
                    </Stack>
                </Col>
            </Row>

            <Row>
                <Col md={7} lg={7}>
                    <div>
                        <h1 style={{textAlign: 'left'}}>SEAT Leon II TDI. 25 Aniversario</h1>
                        <br/>
                        <h2 style={{fontSize: '22px', textAlign: 'left'}}>Nos ponemos al volante del compacto de Martorell en su segunda entrega.</h2>
                        <br/>
                        <p style={{fontSize: '20px', textAlign: 'left'}}>
                            Pasan los años y la vida sigue, algunos modelos vienen y otros se van, pero poder volver a conducirlos siempre es
                            algo especial, y cuando nos contactaron para revivir la experiencia de conducir
                            un Leon de la segunda entrega con motivo del aniversario del Leon. No hemos podido resistir aceptar la propuesta
                            de la marca española.
                            <br/><br/>
                            Hemos probado una unidad con el acabado FR con el archiconocido motor diésel del Grupo Volkwsagen. El 1.9 TDI. La electrificación es imparable y por tanto, esta experiencia ha sido espectacular pero con un sabor final que haría poner nostalgico a cualquiera.
                            <br/>
                        </p>
                    </div>
                </Col>

                <Col md={4} lg={4}>
                <Stack gap={3}>
                    <div>
                        <Image src='A3.jpg' alt='Nuevo Audi A3' fluid/>
                    </div>
                    <div>
                        <Image src='GolfV.jpg' alt='Volkswagen Golf V' fluid/>
                    </div>
                </Stack>
                </Col>

                <Col md={1} lg={1}>
                    <Stack>
                        <div>
                            <h3 style={{fontSize: '19px', textAlign: 'left'}}>Nuevo Audi A3.</h3>
                            <p style={{fontSize: '17px', textAlign: 'left'}}>Restyling de libro para el germano.</p>
                        </div>
                        <div>
                            <h3 style={{fontSize: '19px', textAlign: 'left'}}>VW Golf</h3>
                            <p style={{fontSize: '17px', textAlign: 'left'}}>Otra prueba de los 2000.</p>
                        </div>
                    </Stack>
                </Col>
            </Row>
            </Stack>
        </Container>

    );

}

export default YouTube;