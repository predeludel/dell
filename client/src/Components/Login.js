import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import login from './Icon/ICONS_1.svg';
import { useState, useEffect } from 'react';
function MydModalLogin(props) {
    const [showModal, setShowModal] = useState(true);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // Проверяем, открывался ли сайт впервые
        const isFirstVisit = localStorage.getItem('isFirstVisit') !== 'true';
        if (isFirstVisit) {
            setShowModal(true);
            localStorage.setItem('isFirstVisit', 'true');
        }
    }, []);

    const handleLogin = () => {
        // Проверяем, правильные ли номер телефона и пароль
        if (phone === 'admin' && password === 'admin') {
            setShowModal(false);
        } else {
            alert('Неправильный номер телефона или пароль');
        }
    };

    return (
        <Modal show={showModal} {...props} centered>
            <Modal.Body className="d-flex flex-column align-items-center">
                <h2 id="contained-modal-title-vcenter mt-4" className="font-alcotton" style={{ webkitTextStroke: 1 }}>ВХОД</h2>
                <Form className="w-100">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="phone"
                            placeholder="Номер телефона"
                            autoFocus
                            style={{ border: "none", borderBottom: "1px solid black", borderRadius: 0, textAlign: "center" }}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Control
                            type="password"
                            placeholder="Пароль"
                            style={{ border: "none", borderBottom: "1px solid black", borderRadius: 0, textAlign: "center" }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                </Form>
                <Button
                    onClick={handleLogin}
                    closeButton
                    variant="outline-dark m-2 font-Dimica-Light"
                    style={{ fontSize: 24, borderRadius: '60px', fontFamily: 'Dimica-Light' }}
                >
                    Войти
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default MydModalLogin;