import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Vecto from './Img/Vecto.svg';
import Image from 'react-bootstrap/Image';
import CardMini from './CardMini';
import Container from "react-bootstrap/Container";
import { useState } from 'react';

import Media from 'react-media';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const books = [6, 7, 8, 9,10,11,12];

    const handleNext = (step) => {
        setActiveIndex((activeIndex + step) % books.length);
    };

    const handlePrev = (step) => {
        const newIndex = activeIndex - step;
        setActiveIndex(newIndex < 0 ? books.length - (Math.abs(newIndex) % books.length) : newIndex);
    };

    return (
        <Container>
            <Row className="d-flex align-items-center justify-content-center mt-2 ">
                <Col  xs={1} className="d-flex align-items-center justify-content-center">
                    <Image onClick={() => handlePrev(1)} style={{ width: 20, height: 37, justifyContent: "center", cursor: "pointer" }} src={Vecto} />
                </Col>
                <Col sm={10} xs={10} >
                    <Row className="d-flex justify-content-center">
                        <Media query="(max-width: 768px)">
                            {isMobile =>
                                books.slice(activeIndex, activeIndex + (isMobile ? 1 : 3)).map(book => (
                                    <Col  key={book} className="d-flex align-items-center justify-content-center">
                                        <Container className="d-flex align-items-center justify-content-center">
                                            <CardMini id={book} />
                                        </Container>
                                    </Col>
                                ))
                            }
                        </Media>
                    </Row>
                </Col>
                <Col xs={1} className="d-flex align-items-center justify-content-center">
                    <Image onClick={() => handleNext(1)} style={{ width: 20, height: 37, transform: 'rotate(180deg)', justifyContent: "center", cursor: "pointer" }} src={Vecto} />
                </Col>
            </Row>
        </Container>
    );
}

export default Carousel;



