import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardBasket from './ComponentPage/CardBasket';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Basket = () => {
     const [bookIds, setBookIds] = useState([{ title: "wewew" }]);

     const navigate = useNavigate();

     useEffect(() => {
          const url = 'http://178.154.206.159:8080/basket_book/read';
          const username = "admin";
          const password = "admin";
          let headers = new Headers();
          headers.set("Authorization", "Basic " + btoa(username + ":" + password));

          fetch(url, {
               method: 'GET',
               headers: headers,
          })
               .then((response) => response.json())
               .then((data) => {
                    const extractedIds = data.map(item => item.book.id);
                    setBookIds(extractedIds);
               });
     }, []);


     console.log(bookIds);

     return (
          <Container>
               <Row className="col-centered d-flex justify-content-center align-items-center">
                    <Row className="justify-content-center">
                         <Col className="text-center mt-2">
                              <h3 className="font-alcotton text-dark">Товары из вашей корзины</h3>
                              <p className="font-Dimica-Light" style={{ color: "#B7ADBE", textDecoration: "underline" }} onClick={() => navigate(`/compilation`)}>Вернуться к покупкам</p>
                         </Col>
                    </Row>
               </Row>
               {bookIds.map(id => (
                    <CardBasket key={id} id={id}></CardBasket>
               ))}
               <Container className="col-centered d-flex justify-content-center align-items-center mt-4">
                    <Button className="p-1 m-1 text-dark " variant="white" style={{ background: "#EBEACA", borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Перейти к оформлению заказа</Button>
               </Container>

          </Container>
     );
};

export default Basket;