import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import iconAngular from '../assets/images/iconfinder_angular_1145600.png'
import iconReact from '../assets/images/iconfinder_React.js_logo_1174949.png'
import iconBootstrap from '../assets/images/iconfinder_Bootstrap_4923030.png'
import iconCss from '../assets/images/iconfinder_css3_294692.png'
import iconHtml from '../assets/images/iconfinder_html5_294678.png'
import iconGithub from '../assets/images/iconfinder_mark-github_298822.png'
import iconPhotoshop from '../assets/images/iconfinder_Photoshop_289510.png'
import { filter } from 'minimatch'
function AboutPage(props) {
    return (
        <div className="bg-about" style={{ height: "80vh", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

        <Content title={props.title}>
        <Container>
        
        <Row>
        <Col>
        
        <div className="about" style={{textAlign:"justify"}}>
        My name is Piotr Karczewski. I started my adventure with programming by learning Javascript, then Web technologies - Angular and ReactJS. I feel a strong need for continuous development because I love learning new things.
        
        I spend my free time at the piano, and when there is a little more time I go outside the city with a telescope in the trunk.
        </div>
        
        <img src={iconAngular} onclick="this.style.filter='grayscale(100%)'" style={{height:"15vh", filter:"grayscale(50%)", }}></img>
        <img src={iconReact} style={{height:"15vh"}}></img>
        <img src={iconBootstrap} style={{height:"15vh"}}></img>
        <img src={iconPhotoshop} style={{height:"15vh"}}></img>
        <img src={iconCss} style={{height:"15vh"}}></img>
        <img src={iconHtml} style={{height:"15vh"}}></img>
        <img src={iconGithub} style={{height:"15vh"}}></img>
        </Col>
        </Row>
        </Container>
        </Content>
        </div>
    );
}

export default AboutPage;
