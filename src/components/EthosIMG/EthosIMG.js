import React from 'react';
import { Col, Row } from 'antd';

import 'antd/dist/antd.css';
import "./EthosIMG.css"

import Ethosjpg from "../../assets/ethos-into-code.jpg";

export const EthosIMG = () => {

  return (
    <section id="EthosIMG" >
        <Row className='EthosIMG-row'>
          <Col xs={24} sm={20} md={12} lg={12} className="Ethosdetail-container">
            <div className="Ethosdetail-contain">
              <h1>Our ethos built into code.</h1>
              <p>We built our blockchain with an engine hardwired to automatically and continuously send revenue to all participants.</p>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={12} >
            <div className="EthosIMG-container">
             <img src={Ethosjpg} alt="ethos" className='ethos-img'/>
            </div>
          </Col>
        </Row>
    </section>
  )
}
