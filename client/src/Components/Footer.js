import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
    return (
        <Container className="container-fluid themed-container mt-4 w-100 " style={{ background: "#001C17", justifyContent: "center" }} >
            <Row className="col-centered" style={{ justifyContent: "center" }}>
                <Col className="col-centered d-flex justify-content-center align-items-center" style={{ justifyContent: "center" }}>
                    <div className="text-center">
                        <h3 className="mt-2 font-alcotton" style={{ fontSize: 32, color: "#B7ADBE" }}>КЪНИГА</h3>
                        <p className="font-Dimica-Light mt-2" style={{ color: "#B7ADBE" }}>
                            Откройте для себя мир эксклюзивных книг. Стопка отличных произведений,
                            которые вы можете приобрести только у нас,
                            издательства передали нам право на эксклюзив.
                        </p>
                    </div>

                </Col>
                <Col>
                    <Row>
                        <Col className="col-centered d-flex justify-content-center align-items-center" style={{ justifyContent: "center" }}>
                            <div className="text-center">
                                <h3 className="font-alcotton mt-2" style={{ fontSize: 20, color: "#B7ADBE" }}>МАГАЗИН</h3>
                                <h6 className="font-Dimica-Light mt-2" style={{ color: "#EBEACA" }}>каталог</h6>
                                <h6 className="font-Dimica-Light mt-2" style={{ color: "#EBEACA" }}>подборка</h6>
                                <h6 className="font-Dimica-Light mt-2" style={{ color: "#EBEACA" }}>поиск</h6>
                            </div>
                        </Col>
                        <Col className="col-centered d-flex justify-content-center align-items-center" style={{ justifyContent: "center" }}>
                            <div className="text-center">
                                <h3 className="font-alcotton mt-2" style={{ fontSize: 20, color: "#B7ADBE" }}>ЗАКАЗАТЬ</h3>
                                <h6 className="font-Dimica-Light mt-2" style={{ color: "#EBEACA" }}>по России</h6>
                                <h6 className="font-Dimica-Light mt-2" style={{ color: "#EBEACA" }}>самовывоз</h6>
                                <h6 className="font-Dimica-Light mt-2" style={{ color: "#EBEACA" }}>оплата</h6>
                            </div>
                        </Col>

                    </Row>
                </Col>
            </Row>
            <h6 className="font-Dimica-Light mt-2" style={{ fontSize: 10, color: "#EBEACA" }}>© libellum 2024</h6>

        </Container>


    )
}

export default Footer;