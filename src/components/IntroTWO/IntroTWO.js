import React from 'react';
import { Col, Row } from 'antd';

import 'antd/dist/antd.css';
import "./IntroTWO.css"

export const IntroTWO = () => {

  return (
    <section id="IntroTWO" >
        <Row className='IntroTWO-row'>
          <Col xs={24} sm={20} md={12} lg={3} />
          <Col xs={24} sm={20} md={12} lg={17} >
            <div className="IntroTWO-container">
              <p className='IntroTWO-content'>
                <span>It’s early days at Anatha.
                  <br/>
                  <br/>
                  But the foundation has been laid—our chain, token, and wallet app are all live. We are now working to build tools and apps that let you do the things you want to do while helping yourself and everyone around the world on the Anatha network.  Our goal is to create a regenerative economy for all — a bottom-up UBI.
                  <br/>
                  <br/>
                  That’s what we mean by Crypto for the 100%
                </span>
                </p>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={5} />
        </Row>
    </section>
  )
}
