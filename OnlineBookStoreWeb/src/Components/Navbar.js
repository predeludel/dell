import React from 'react';
import { Button, Navbar, NavbarBrand, Image, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import heart from './Icon/ICONS.svg';
import login from './Icon/ICONS_1.svg';
import backet from './Icon/backet.svg';
import Media from 'react-media';
import MydModalWithGrid from './Сatalog.js';
import MydModalLogin from './Login.js';
import { useState, useEffect } from 'react';

function NaviBar() {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    
    const isFirstVisit = localStorage.getItem('isFirstVisit') !== 'true';
    if (isFirstVisit) {
      setShow(true);
      localStorage.setItem('isFirstVisit', 'true');
    }
  }, []);

  return (
    <Media query="(min-width: 768px)">
      {matches =>
        matches ? (
          <Navbar className="justify-content-between" collapseOnSelect expand="lg" activeKey="/home">
            <Nav.Link href="/" className="text-dark">
              <NavbarBrand className="m-2 font-alcotton justify-content-center ms-auto text-center" style={{ fontSize: 32, background: '#EBEACA' }}>
                кънига
              </NavbarBrand>
            </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
              <Nav className="justify-content-center">
                <Nav.Link className="m-2 font-Dimica-Light" onClick={() => setModalShow(true)} style={{ fontSize: 32 }}>
                  Каталог
                </Nav.Link>
                <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                <Nav.Link className="m-2 font-Dimica-Light" href="/search" style={{ fontSize: 32 }}>
                  Поиск
                </Nav.Link>
                <Nav.Link className="m-2 font-Dimica-Light" href="/compilation" style={{ fontSize: 32 }}>
                  Подборка
                </Nav.Link>
              </Nav>
              <Nav className='justify-content-center'>
                <Button href="/basket" variant="outline-dark m-2 font-Dimica-Light" style={{ fontSize: 24, borderRadius: '60px', fontFamily: 'Dimica-Light' }}>
                  Корзина
                </Button>
                <Image className="m-2" src={heart} alt={"heart"} style={{ width: 40, height: 40 }} />
                <Image className="justify-content-center m-2" src={login} style={{ width: 40, height: 40 }} onClick={() => setShow(true)} />
                <MydModalLogin show={show} onHide={() => setShow(false)} />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        ) : (
          <Navbar className="justify-content-between" collapseOnSelect expand="lg" activeKey="/home">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav.Link href="/" className="text-dark">
              <NavbarBrand className="m-2 font-alcotton justify-content-center ms-auto text-center" style={{ background: '#EBEACA' }}>
                кънига
              </NavbarBrand>
            </Nav.Link>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav className="justify-content-center">
                <Nav.Link className="font-Dimica-Light" onClick={() => setModalShow(true)}>
                  Каталог
                </Nav.Link>
                <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                <Nav.Link className="font-Dimica-Light" href="/search" >
                  Поиск
                </Nav.Link>
                <Nav.Link className=" font-Dimica-Light" href="/compilation">
                  Подборка
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav className="justify-content-center ms-auto text-center">
              <Container className="col-centered d-flex justify-content-center align-items-center">
                <Image className="m-1" src={heart} alt={"heart"} style={{ width: 27, height: 27, justifyContent: "center" }} />
                <a href="/basket">
                  <Image className="m-1" src={backet} alt={"heart"} style={{ width: 27, height: 27, justifyContent: "center" }} />
                </a>
                <Image className="m-1" src={login} style={{ width: 27, height: 27, justifyContent: "center" }} onClick={() => setShow(true)} />
                <MydModalLogin show={show} onHide={() => setShow(false)} />

              </Container>
            </Nav>
          </Navbar>
        )
      }
    </Media>
  );
}

export default NaviBar;
