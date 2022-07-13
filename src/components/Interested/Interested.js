import React from 'react';
import { Col, Row } from 'antd';

import 'antd/dist/antd.css';
import "./Interested.css"

export const Interested = () => {

  return (
    <section id="Interested" >
        <Row className='Interested-row'>
          <Col xs={24} sm={20} md={12} lg={5} />
          <Col xs={24} sm={20} md={12} lg={14} >
            <div className="Interested-container">
              <div className='Interested-content'>
                <p>Interested in working with Anatha?</p>
                <span>
                  We are always hiring — devs, designers, marketers.
                  <br/> 
                  email us 
                  <a href='https://project-anatha.gitbook.io/master/'> jobs@anatha.io</a> 
                </span>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={5} />
        </Row>
    </section>
  )
}
