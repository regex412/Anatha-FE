import React from 'react';
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import "./Intro.css"

export const Intro = () => {

  return (
    <section id="Intro" >
        <Row className='Intro-row'>
          <Col xs={24} sm={20} md={12} lg={4} />
          <Col xs={24} sm={20} md={12} lg={16} >
            <div className="Intro-container">
              <p className='Intro-content'>
                <span>Anatha is an ever-growing set of (decentralized) apps where you can do a lot of the things you do now—create, share, & discover content; mint, buy, & store NFTs; store & manage all your cryptocurrencies; and more. Only the revenue goes to you.
                  <br/>
                  <br/>
                  Because if you create value, why should you give it all away?  
                </span></p>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={4} />
        </Row>
    </section>
  )
}
