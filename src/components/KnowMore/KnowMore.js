import React from 'react';
import { Col, Row } from 'antd';

import 'antd/dist/antd.css';
import "./KnowMore.css"

export const KnowMore = () => {

  return (
    <section id="KnowMore" >
        <Row className='KnowMore-row'>
          <Col xs={24} sm={20} md={12} lg={7} />
          <Col xs={24} sm={20} md={12} lg={10} >
            <div className="KnowMore-container">
              <div className='KnowMore-content'>
                <p>Want to know more?</p>
                <span>
                  The technical side of things 
                  <br/>
                  <a href='https://project-anatha.gitbook.io/master/'>read our whitepaper</a> 
                </span>
                <br/>
                <br/>
                <span>
                  Our philosophy & vision. 
                  <br/>
                  <a href='https://anatha.io/about'>view our ethos.</a> 
                </span>
                <br/>
                <br/>
                <span>
                  The ambitious social impact Anatha plans to deliver. 
                  <br/>
                  <a href='https://www.dropbox.com/s/4knyc5w8fvayo37/Ecotone__Summary_and%20_FAQ.pdf?dl=0'>review our Ecotone report﻿</a> 
                </span>
                <br/>
                <br/>
                <span>
                  Let us help you launch your own chain, token, NFT platform. 
                  <br/>
                  <a href="https://anatha.io/enterprise">see our enterprise solutions</a> 
                </span>
                
              </div>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={7} />
        </Row>
    </section>
  )
}
