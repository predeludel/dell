import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import img from './Img/image 10.png';
import heart from './Img/ICONS.svg';

function CardBig() {
    return (
        <Container className="col-centered d-flex justify-content-center align-items-center" style={{ background: "#B7ADBE" }}>
            <div className="text-center">
                <Image className="mt-2" src={img} style={{ width: 112, height: 174 }} />
                <h3 className="font-Dimica-Light mt-2" style={{ fontSize: 20 }}>“Геометрия скорби”</h3>
                <h5 className="font-Dimica-Light" style={{ fontSize: 15 }}>Майкл Фрейм</h5>
                <Container className="col-centered">
                    <Button className="m-1 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>700 ₽</Button>
                    <Button className="m-1 text-dark border border-dark" variant="white" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Купить</Button>
                    <Image src={heart} style={{ justifyContent: "center"}} />
                </Container>
            </div>
        </Container>

    );
}

export default CardBig;