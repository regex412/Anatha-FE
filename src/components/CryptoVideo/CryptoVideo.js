import React from 'react';
import { Col, Row } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import "./CryptoVideo.css"
import Anatha from "../../assets/Anatha-Landing-Final-v2.mp4"

export const CryptoVideo = () => {

  return (
    <section id="CryptoVideo" >
      <Row className='CryptoVideo-row'>
        <Col xs={24} sm={20} md={12} lg={5} />
        <Col xs={24} sm={20} md={12} lg={14} >
          <div className="CryptoVideo-container">
            <div className='CryptoVideo-content'>
              <p className='Crypto-percent'>
                Crypto For the 100%  
              </p>
                <br/>
              <span className='Crypto-percent-content'>
                The technology exists today to build economic systems that lift 100% of everyone, everywhere. 
              </span>
            </div>
            <Row>
              <Col xs={24} sm={20} md={12} lg={5} />
              <Col xs={24} sm={20} md={12} lg={16}>
                <div className="background-video">
                  <video src={Anatha} className="background-video" autoPlay loop muted>
                    <source src={Anatha} type="video/mp4"/>
                  </video>
                </div>
                <div className='video-btn_container'>
                  <Button className='video-btn'>Watch Short Film</Button>
                </div>
              </Col>
              <Col xs={24} sm={20} md={12} lg={4} />
            </Row>
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={4} />
      </Row>
    </section>
  )
}
