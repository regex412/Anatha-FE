import React from 'react';
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import "./About.css"

export const About = () => {

  return (
    <section id="about" >
      <Row gutter={[24, 24]} justify="center" className='about-row'>
        <Col xs={24} sm={20} md={12} lg={4} />
        <Col xs={24} sm={20} md={12} lg={16} >
          <div className="about-container">
            <p className='top-title'>We believe if you create value, you should share in that value.</p>
            <p className='middle-title'>It's that simple</p>
            <p className='bottom-title'><span>Sign up for our newsletter<br/>THE PRACTICAL IDEALIST</span></p>
            <Row className='email-container'>
                <Col lg={5}/>
                <Col lg={8}><Input className='email-box' placeholder='your email'/></Col>
                <Col lg={1}/>
                <Col lg={8} className='subscribe-btn_contain'><Button className='subscribe-btn'>Subscribe</Button></Col>
                <Col lg={4}/>
            </Row>
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={4} />
      </Row>
    </section>
  )
}
