import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Carousel from "./ComponentPage/Carousel";


export const Compilation = () => (
  <Container>
    <Row className="justify-content-center">
      <Row className="justify-content-center">
        <Col className="text-center mt-2">
          <h4 className="font-alcotton text-dark">Вам может понравиться</h4>
        </Col>
      </Row>
    </Row>
    <Row>
      <Col className="text-center d-flex mt-2">
        <h4 className="font-Dimica-Light text-dark mt-4">Лимитированная коллекция</h4>
        
      </Col>
    </Row>
    <Carousel></Carousel>
    <Row>
      <Col className="text-center d-flex mt-2">
        <h4 className="font-Dimica-Light text-dark mt-4">На основе понравившихся</h4>
        
      </Col>
    </Row>
    <Carousel></Carousel>
    <Row>
      <Col className="text-center d-flex mt-2">
        <h4 className="font-Dimica-Light text-dark mt-4">Kоллекция</h4>
       
      </Col>
    </Row>
    <Carousel></Carousel>
  </Container>


)

export default Compilation;

