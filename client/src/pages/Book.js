import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardBook from './ComponentPage/CardBook';
import Carousel from "./ComponentPage/Carousel";


import { useParams } from 'react-router-dom';

export const Book = () => {
    const { id } = useParams();

    return (
        <Container>
            <CardBook id={id}></CardBook>
            <Row className="justify-content-center">
                <Row className="justify-content-center">
                    <Col className="text-center mt-2">
                        <h3 className="font-alcotton text-dark">Вам может понравиться</h3>
                    </Col>
                </Row>
            </Row>
            <Carousel></Carousel>
        </Container>
    );
};
