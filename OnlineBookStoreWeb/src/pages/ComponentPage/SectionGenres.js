import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Vecto from './Img/Vecto.svg';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';

function SectionGenres() {
    const [categories, setCategories] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const url = `http://178.154.206.159:8080/category/public/read`;
        const username = "admin";
        const password = "admin";
        let headers = new Headers();
        headers.set("Authorization", "Basic " + btoa(username + ":" + password));

        fetch(url, {
            method: 'GET',
            headers: headers,
        })
        .then((response) => response.json())
        .then((data) => setCategories(data));
    }, []);

    console.log(categories);

    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ background: "#B7ADBE" }}>
        <div className="text-center">
          <Container className="col-centered">
            {showAll
              ? categories.map((category) => (
                  <Button key={category.id} className="m-2 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>{category.category_name}</Button>
                ))
              : categories.slice(0, 5).map((category) => (
                  <Button key={category.id} className="m-2 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>{category.category_name}</Button>
                ))
            }
            <Image
              className="m-2"
              style={{ width: 20, height: 37, transform: 'rotate(-90deg)' }}
              src={Vecto}
              onClick={() => setShowAll(!showAll)}
            />
          </Container>
        </div>
      </Container>
    );
}

export default SectionGenres;

