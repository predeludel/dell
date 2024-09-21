import React from "react";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CardsPopular() {
    const navigate = useNavigate();
    const [books, setBook] = useState([{ title: "wewew" }]);

    useEffect(() => {
        const url = `http://178.154.206.159:8080/book/public/read`;
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
    }, []);
    return (
        <Container>
        <Row style={{ background: "#EBEACA" }}>
            {books.slice(0, 4).map((book, index) => (
                <Col key={index} className="text-center mt-2">
                    {(index % 2 === 0) ? (
                        <>
                            {book.title && <p className="font-Dimica-Light text-dark m-1" style={{ textDecoration: "underline" }}>“{book.title}”</p>}
                          <Image src={process.env.PUBLIC_URL + `/Img/${index+1}.jpg`} className="m-1" style={{ width: 202, height: 278 }} onClick={() => navigate(`/book/${book.id}`)}/>
                        </>
                    ) : (
                        <>
                            <Image src={process.env.PUBLIC_URL + `/Img/${index+1}.jpg`} className="m-1" style={{ width: 202, height: 278 }} onClick={() => navigate(`/book/${book.id}`)} />
                            {book.title && <p className="font-Dimica-Light text-dark m-1" style={{ textDecoration: "underline" }}>“{book.title}”</p>}
                        </>
                    )}
                </Col>
            ))}
        </Row>
    </Container>


    )
}

export default CardsPopular;