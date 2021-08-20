import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./Home.css"
import LeftSide from './LeftSide/LeftSide'
import MyNav from './MyNav/MyNav'
import RightSide from './RightSide/RightSide'
import TopCarousal from './TopCarousal/TopCarousal'
import logo from "../../assets/logo3.png"

const Home = () => {
    return (
        <Container id="home-body">
            <Image fluid className="main-logo" src={logo} alt="logo" />
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <MyNav/>                        
                    </Col>
                    <Col xs={11} sm={11} md={11} lg={7} xl={8}>
                        <Row className="py-5 carousal-row">
                            <TopCarousal/>
                        </Row>
                        <Row>
                            <LeftSide/>
                        </Row>
                    </Col>
                    <Col xs={11} sm={11} md={11} lg={4} xl={3}>
                        <RightSide/>
                    </Col>
                </Row>            
        </Container>
    )
}

export default Home
