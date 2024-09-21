import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Vector_yel from './Img/Vector_yel.svg';
import { useNavigate } from 'react-router-dom';


import { useState, useEffect } from 'react';

function CardMini({ id }) {
    const [book, setBook] = useState({ title: "wewew" });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const url = `http://178.154.206.159:8080/book/public/read/${id}`;
                const username = "admin";
                const password = "admin";
                let headers = new Headers();
                headers.set("Authorization", "Basic " + btoa(username + ":" + password));

                const response = await fetch(url, {
                    method: 'GET',
                    headers: headers,
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setBook(data);
            } catch (error) {
                console.error('Error fetching book data:', error);
            }
        };

        fetchBookData();
    }, [id]);

    const handleBuyClick = () => {
        const basketData = {
            id: {},
            quantity: 1,
            book: book,
            basket: {
                id: 1,
                isActive: true,
                myUser: 
                 {
                id: 1,
                username: "admin",
                phone: null,
                password: "$2a$10$Rr5flSEJSKmCRjty3orsFeDfS2eaDkTwncEDdmeheL56Xtcn6TwqO",
                isAdmin: true
              }
                
              }
        };

        const username = "admin";
        const password = "admin";
        let headers = new Headers();
        headers.set("Authorization", "Basic " + btoa(username + ":" + password));

        fetch('http://178.154.206.159:8080/basket_book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': headers.get('Authorization')
            },
            body: JSON.stringify(basketData)
        })
            .then(response => {
                if (response.ok) {
                    // Handle success
                } else {
                    // Handle error
                }
            })
            .catch(error => console.error('Error adding to basket:', error));
    };
    console.log(`./Img/${book.id}.jpg`)
    return (
        <Container
            className="col-centered d-flex justify-content-center align-items-center"
            style={{ background: "#001C17", cursor: 'pointer' }}
            

        >
            <div className="text-center">
                <Image className="mt-2" src={process.env.PUBLIC_URL + `/Img/${id}.jpg`} style={{ width: 112, height: 174 }} onClick={() => navigate(`/book/${book.id}`)} />
                <h3 className="font-Dimica-Light mt-2" style={{ color: "#B7ADBE", fontSize: 20 }}>"{book.title}"</h3>
                <h5 className="font-Dimica-Light" style={{ color: "#B7ADBE", fontSize: 15 }}>{book.author}</h5>
                <Container className="col-centered">
                    <Button className="p-1 m-1 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>{book.price} ₽</Button>
                    <Button className="p-1 m-1 text-dark" variant="white" style={{ background: "#EBEACA", borderRadius: '60px', fontFamily: 'Dimica-Light' }} onClick={handleBuyClick}>Купить</Button>
                    <Image src={Vector_yel} style={{ justifyContent: "center" }} />
                </Container>
            </div>
        </Container>
    );
}

export default CardMini;