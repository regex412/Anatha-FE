import React from 'react';
import { Col, Row } from 'antd';
import { Button} from 'antd';
import 'antd/dist/antd.css';
import "./IdeaIMG.css"
import ideaImg from "../../assets/Practical-Idealist.jpg"

export const IdeaIMG = () => {

  return (
    <section id="IdeaIMG" >
        <Row className='ideaimg-row'>
        <Col xs={24} sm={20} md={12} lg={24} >
          <div className="ideaimg-container">
            <Row>
              <Col xs={24} sm={20} md={12} lg={1} />
              <Col xs={24} sm={20} md={12} lg={20}>
                <div className="ideaimg_contain">
                  <img src={ideaImg} alt="ideaimg" className='ideaimg'></img>
                </div>
                <Row>
                  <Col xs={24} sm={20} md={12} lg={1} />
                  <Col xs={24} sm={20} md={12} lg={22} >
                    <p className='ideaimg_content'>Sign up for our newsletter, THE PRACTICAL IDEALIST, created for anyone who believes the system needs a major upgrade.</p>
                  </Col>
                  <Col xs={24} sm={20} md={12} lg={1} />
                </Row>
              </Col>
              <Col xs={24} sm={20} md={12} lg={1} />
            </Row>
            <Row className='button-container'>
                <Col lg={8}/>
                <Col lg={4}><input className="idea-email_box" placeholder='your email'/></Col>
                <Col lg={1}/>
                <Col lg={4} className='subscribe-btn_contain'><Button className='idea-btn'>Subscribe</Button></Col>
                <Col lg={5}/>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  )
}
