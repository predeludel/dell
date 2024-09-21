import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardBig from './ComponentPage/CardBig';
import Carousel from "./ComponentPage/Carousel";
import { useNavigate } from 'react-router-dom';
import Vecto from './ComponentPage/Img/Vecto.svg';
import SectionSeparation from './ComponentPage/Img/SectionSeparation.svg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import SectionGenresCircles from './ComponentPage/SectionGenresCircles';
import SectionGenres from './ComponentPage/SectionGenres';
import CardsPopular from './ComponentPage/CardsPopular';


export const Home = () => {
  const navigate = useNavigate();
  return (


    <Container>
      <CardsPopular></CardsPopular>
      <SectionGenres></SectionGenres>
      <Row className="justify-content-center">
        <Row className="justify-content-center">
          <Col className="text-center mt-2">
            <h1 className="font-alcotton text-dark">НОВИНКИ</h1>
          </Col>
        </Row>
      </Row>
      <Row className="justify-content-center mt-4">

        <Col sm={4} className=" d-flex d-none d-sm-block ">
          <Container className="d-flex align-items-center">
            <Image style={{ width: 20, height: 37 }} src={Vecto} />
            <CardBig></CardBig>
          </Container>
        </Col>
        <Col sm={4} className="d-none d-sm-block">
          <CardBig></CardBig>
        </Col>
        <Col sm={4} className="d-none d-sm-block">
          <Container className="d-flex align-items-center">
            <CardBig></CardBig>
            <Image style={{ width: 20, height: 37, transform: 'rotate(180deg)' }} src={Vecto} />
          </Container>
        </Col>


        <Col xs={12} className="d-block d-sm-none">
          <Container className="d-flex align-items-center">
            <Image style={{ width: 20, height: 37 }} src={Vecto} />
            <CardBig></CardBig>
            <Image style={{ width: 20, height: 37, transform: 'rotate(180deg)' }} src={Vecto} />
          </Container>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Row className="justify-content-center">
          <Col className="text-center mt-4">
            <Image style={{ width: '100%', maxWidth: '100%' }} src={SectionSeparation} />
          </Col>
        </Row>
      </Row>

      <Row>
        <Col className="text-center d-flex mt-2">
          <h4 className="font-Dimica-Light text-dark mt-4">Лимитированная коллекция</h4>
          <Button className="text-dark m-4 " variant="white" style={{ background: "#EBEACA", borderRadius: '30px', fontFamily: 'Dimica-Light' }} onClick={() => navigate(`/compilation`)}>Все</Button>
        </Col>
      </Row>
      <Carousel></Carousel>
      <SectionGenresCircles></SectionGenresCircles>
      <Row>
        <Col className="text-center d-flex mt-2">
          <h4 className="font-Dimica-Light text-dark mt-4">Лимитированная коллекция</h4>
          <Button className="text-dark m-4 " variant="white" style={{ background: "#EBEACA", borderRadius: '30px', fontFamily: 'Dimica-Light' }} onClick={() => navigate(`/compilation`)}>Все</Button>
        </Col>
      </Row>
      <Carousel></Carousel>
    </Container>
  );
};
export default Home;