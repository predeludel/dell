import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Vecto from './Icon/Vecto.svg';
import Image from 'react-bootstrap/Image';

function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='font-alcotton' style={{ webkitTextStroke: 1 }}>
                    КАТАЛОГ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <Row>
                        <Col>
                            <div className="">
                                <h6 className='font-Dimica-Light' style={{ color: '#B7ADBE', textDecoration: "underline" }}>Книги</h6>
                                <Row className="col-centered justify-content-center align-items-center">
                                    <Col className="font-Dimica-Light" style={{ justifyContent: "center" }}> Экономика <Image style={{ width: 9, height: 12, transform: 'rotate(180deg)', justifyContent: "center" }} src={Vecto} /></Col>
                                </Row>
                                <Row className="col-centered justify-content-center align-items-center">
                                    <Col className="font-Dimica-Light" style={{ justifyContent: "center" }}> Менеджмент <Image style={{ width: 9, height: 12, transform: 'rotate(180deg)', justifyContent: "center" }} src={Vecto} /></Col>
                                </Row>
                                <Row className="col-centered justify-content-center align-items-center">
                                    <Col className="font-Dimica-Light" style={{ justifyContent: "center" }}> Маркетинг <Image style={{ width: 9, height: 12, transform: 'rotate(180deg)', justifyContent: "center" }} src={Vecto} /></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="">
                                <h6 className='font-Dimica-Light' style={{ color: '#B7ADBE', textDecoration: "underline" }}>Коллекции</h6>
                                <Row className="col-centered justify-content-center align-items-center">
                                    <Col className="font-Dimica-Light" style={{ justifyContent: "center" }}> Ушедший мир <Image style={{ width: 9, height: 12, transform: 'rotate(180deg)', justifyContent: "center" }} src={Vecto} /></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="">
                                <h6 className='font-Dimica-Light' style={{ color: '#B7ADBE', textDecoration: "underline" }}>Ограниченный выпуск</h6>
                                <Row className="col-centered justify-content-center align-items-center">
                                    <Col className="font-Dimica-Light" style={{ justifyContent: "center" }}>Синий Карандаш <Image style={{ width: 9, height: 12, transform: 'rotate(180deg)', justifyContent: "center" }} src={Vecto} /></Col>
                                </Row>
                                <Row className="col-centered justify-content-center align-items-center">
                                    <Col className="font-Dimica-Light" style={{ justifyContent: "center" }}> Зина Исупова <Image style={{ width: 9, height: 12, transform: 'rotate(180deg)', justifyContent: "center" }} src={Vecto} /></Col>
                                </Row>
                                <Row className="col-centered justify-content-center align-items-center">
                                    <Col className="font-Dimica-Light" style={{ justifyContent: "center" }}> Антон Кушаев <Image style={{ width: 9, height: 12, transform: 'rotate(180deg)', justifyContent: "center" }} src={Vecto} /></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}
export default MydModalWithGrid;