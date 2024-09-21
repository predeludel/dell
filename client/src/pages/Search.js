import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import SectionGenres from './ComponentPage/SectionGenres';

import Carousel from "./ComponentPage/Carousel";
import CardsPopular from './ComponentPage/CardsPopular';

export const Search = () => (
     <Container className="justify-content-center">
          <FloatingLabel
               controlId="floatingInput"
               label="Книги, авторы, жанры"
               className="mb-3 font-Dimica-Light" style={{ fontSize: 24 }}>
               <Form.Control type="name" placeholder="book_name" />
          </FloatingLabel>
          <SectionGenres></SectionGenres>
          <Row className="justify-content-center">
               <Row className="justify-content-center">
                    <Col className="text-center mt-2">
                         <h3 className="font-alcotton text-dark">Сейчас популярно</h3>
                    </Col>
               </Row>
          </Row>
          
          <CardsPopular></CardsPopular>
          
          <Row className="justify-content-center">
               <Row className="justify-content-center">
                    <Col className="text-center mt-2">
                         <h3 className="font-alcotton text-dark">Вам может понравиться</h3>
                    </Col>
               </Row>
          </Row>
          <Carousel></Carousel>
          {/* <Row className="justify-content-center mt-2">
             
               <Col sm={3} className=" d-flex d-none d-sm-block ">
                    <Container className="d-flex align-items-center">
                         <Image style={{ width: 20, height: 37 }} src={Vecto} />
                         <CardMini className="flex-grow-1" />
                    </Container>
               </Col>
               <Col sm={3} className="d-none d-sm-block">
                    <CardMini className="flex-grow-1" />
               </Col>
               <Col sm={3} className="d-none d-sm-block">
                    <CardMini className="flex-grow-1" />
               </Col>
               <Col sm={3} className="d-none d-sm-block">
                    <Container className="d-flex align-items-center">
                         <CardMini className="flex-grow-1" />
                         <Image style={{ width: 20, height: 37, transform: 'rotate(180deg)' }} src={Vecto} />
                    </Container>
               </Col>

              
               <Col xs={12} className="d-block d-sm-none">
                    <Container className="d-flex align-items-center">
                         <Image style={{ width: 20, height: 37 }} src={Vecto} />
                         <CardMini className="flex-grow-1" />
                         <Image style={{ width: 20, height: 37, transform: 'rotate(180deg)' }} src={Vecto} />
                    </Container>
               </Col>
          </Row> */}
     </Container>

)