import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Vector_yel from './Img/ICONS.svg';


import { useState, useEffect } from 'react';

function CardBook({ id }) {
    const [book, setBook] = useState([{ title: "wewew" }]);

    useEffect(() => {
        const url = `http://178.154.206.159:8080/book/public/read/${id}`;
        const username = "admin";
        const password = "admin";
        let headers = new Headers();
        headers.set("Authorization", "Basic " + btoa(username + ":" + password));

        fetch(url, {
            method: 'GET',
            headers: headers,
        })
            .then((response) => response.json())
            .then((data) => setBook(data));
    }, [id]);


    console.log(book);

    return (
        <Container className="">
            <Row sm={6} className="d-none d-sm-flex">
                <Col sm={6} className="col-centered d-flex justify-content-center align-items-center">
                    <Image className="mt-2" src={process.env.PUBLIC_URL + `/Img/${id}.jpg`} style={{ width: 200, height: 300 }} />
                </Col>
                <Col sm={6} className="text-left justify-content-start">
                    <h2 className="font-Dimica-Light mt-2">"{book.title}"</h2>
                    <h6 className="font-Dimica-Light">{book.author}</h6>
                    <Button className="p-1 mt-4 text-dark background-light" variant="light" style={{ background: "#B7ADBE", borderRadius: '0px', fontFamily: 'Dimica-Light' }}>{book.price} ₽</Button>
                    <Col className="mt-4 ">
                        <Button className="p-1 mt-2 text-dark background-light" variant="light" style={{ background: "#EBEACA", borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Купить</Button>
                        <Image src={Vector_yel} />
                    </Col>
                    <p className="font-Dimica-Light mt-4">Язык: {book.language}</p>
                    <p className="font-Dimica-Light">Страниц: {book.paged}</p>
                    <p className="font-Dimica-Light">Обложка: {book.cover}</p>
                </Col>
            </Row>
            <Row sx={12} className="d-flex d-sm-none">
                <Col className="col-centered d-flex ">
                    <Col>
                        <Image className="flex-column " src={process.env.PUBLIC_URL + `/Img/${id}.jpg`} style={{ width: 100, height: 170 }} />
                    </Col>

                    <Col className="text-left justify-content-start">
                        <h6 className="font-Dimica-Light mt-2">"{book.title}"</h6>
                        <p className="font-Dimica-Light">{book.author}</p>
                        <Button className="p-1 mt-4 text-dark background-light" variant="light" style={{ background: "#B7ADBE", borderRadius: '0px', fontFamily: 'Dimica-Light' }}>{book.price} ₽</Button>
                        <Col className="mt-4 ">
                            <Button className="p-1 mt-2 text-dark background-light" variant="light" style={{ background: "#EBEACA", borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Купить</Button>
                            <Image src={Vector_yel} />
                        </Col>
                        <p className="font-Dimica-Light mt-4">Язык: {book.language}</p>
                        <p className="font-Dimica-Light">Страниц: {book.paged}</p>
                        <p className="font-Dimica-Light">Обложка: {book.cover}</p>
                    </Col>
                </Col>
            </Row>
            <Row className="col-centered d-flex justify-content-center align-items-center">
                <h6 className="font-Dimica-Light mt-4">
                    {book.description}
                </h6>
            </Row>
        </Container>
    );
}

export default CardBook;