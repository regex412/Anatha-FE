import React from 'react';
import { Col, Row } from 'antd';

import 'antd/dist/antd.css';
import "./Bucky.css"

export const Bucky = () => {

  return (
    <section id="Bucky" >
        <Row className='Bucky-row'>
          <Col xs={24} sm={20} md={12} lg={4} />
          <Col xs={24} sm={20} md={12} lg={16} >
            <div className="Bucky-container">
              <div className='Bucky-content'>
                <h1>
                  You never change things by fighting the existing reality.
                  <br/>
                </h1>
                <h1> 
                  To change something, build a new model that makes the existing model obsolete.
                  <br/>
                </h1>
                <p>BUCKY FULLER</p>

              </div>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={4} />
        </Row>
    </section>
  )
}
