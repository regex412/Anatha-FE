import React from 'react';
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import "./MountIMG.css"
import Hero from "../../assets/Hero-Square-3.jpg"
export const MountIMG = () => {

  return (
    <section id="MountIMG" >
        <Row gutter={[24, 24]} justify="center" className='MountIMG-row'>
          <Col xs={24} sm={20} md={12} lg={8} />
          <Col xs={24} sm={20} md={12} lg={8} >
            <div className="MountIMG-container">
              <img src={Hero} alt="hero" className='MountIMG-container_img'/>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={8} />
        </Row>
    </section>
  )
}
