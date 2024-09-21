import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Krest from './Img/Krest.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CardBasket({ id }) {
    const [book, setBook] = useState([{ title: "wewew" }]);
    const navigate = useNavigate();
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
        <Container className=" border-bottom border-dark border-1 ">
            <Row className="">
                <Row  className="d-none d-sm-flex justify-content-center mt-4" style={{ }}>
                    <Col md={3} className="justify-content-end" style={{justifyContent: "end"}}>
                        <Image className="justify-content-end" src={process.env.PUBLIC_URL + `/Img/${id}.jpg`} style={{ height: "260px", width: "220px", justifyContent: "end" }} onClick={() => navigate(`/book/${book.id}`)} />
                    </Col>
                    <Col md={3} className="">
                        <h5 className="font-Dimica-Light">"{book.title}"</h5>
                        <h6 className="font-Dimica-Light" style={{ color: "#B7ADBE" }}>{book.author}</h6>
                        <Button className="p-1 m-1 text-dark" variant="white" style={{ background: "#B7ADBE", color: "#001C17", fontFamily: 'Dimica-Light', borderRadius: 0 }}>{book.price} ₽</Button>
                    </Col>
                    <Col className="" md={1}>
                        <Image className="" src={Krest} style={{ justifyContent: "center" }} />
                    </Col>
                </Row>

                <Row className="d-block d-sm-none d-flex justify-content-center" style={{ alignItems: "flex-start" }}>
                    <Col xs={5} className="mt-4">
                        <Image src={process.env.PUBLIC_URL + `/Img/${id}.jpg`} style={{ maxWidth: "100%", height: "auto", width: "100%" }} onClick={() => navigate(`/book/${book.id}`)} />
                    </Col>
                    <Col xs={5} className="mt-4">
                        <h5 className="font-Dimica-Light">"{book.title}"</h5>
                        <h6 className="font-Dimica-Light" style={{ color: "#B7ADBE" }}>{book.author}</h6>
                        <Button className="p-1 m-1 text-dark" variant="white" style={{ background: "#B7ADBE", color: "#001C17", fontFamily: 'Dimica-Light', borderRadius: 0 }}>{book.price} ₽</Button>
                    </Col>
                    <Col className="mt-4" xs={2}>
                        <Image className="" src={Krest} style={{ alignItems: "flex-start" }} />
                    </Col>
                </Row>




            </Row>
        </Container>

    );
}

export default CardBasket;