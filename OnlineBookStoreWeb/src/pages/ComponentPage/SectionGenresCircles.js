import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image_13 from './Img/image_13.png';
import image_14 from './Img/image 14.png';
import image_15 from './Img/image 15.png';
import image_12 from './Img/image 12.png';
import React from "react";
import { useNavigate } from 'react-router-dom';

function SectionGenresCircles() {
    const navigate = useNavigate();
    return (
        <Container className="d-flex justify-content-center align-items-center mt-4" style={{ background: "#B7ADBE" }}>
            <Row className='m-1'>
                {/* <Col xs={12} sm={6} className="position-relative">
                    <div className="d-flex justify-content-center align-items-center h-100" style={{ backgroundImage: `url(${image_13})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h4 className="font-alcotton text-dark text-center" style={{ webkitTextStroke: 5 }}>ПРОЗА</h4>
                    </div>
                </Col> */}
                <Col xs={12} sm={6}>
                    <Image className="" style={{ width: '100%', maxWidth: '100%' }} src={image_13} onClick={() => navigate(`/compilation`)} />
                </Col>

                <Col xs={12} sm={6}>
                    <Image className="" style={{ width: '100%', maxWidth: '100%' }} src={image_12} onClick={() => navigate(`/compilation`)} />
                </Col>
            </Row>
            <Row className='m-1'>
                <Col xs={12} sm={6} className="text-center">
                    <Image className="" style={{ width: '100%', maxWidth: '100%' }} src={image_14} onClick={() => navigate(`/compilation`)}/>
                </Col>
                <Col xs={12} sm={6}>
                    <Image className="" style={{ width: '100%', maxWidth: '100%' }} src={image_15} onClick={() => navigate(`/compilation`)}/>
                </Col>
            </Row>
        </Container>

    );
}

export default SectionGenresCircles;