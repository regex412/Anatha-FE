import React from 'react';
import { Col, Row } from 'antd';
import { Button } from 'antd';
import ScrollToTop from "react-scroll-to-top";
import { GoTopButton } from './GoTopButtton';
import 'antd/dist/antd.css';
import "./Footer.css"

import protect from "../../assets/protect.png"

export const Footer = () => {

  return (
    <section id="Footer" >
      <Row className='Footer-row'>
        <Col xs={24} sm={20} md={12} lg={4} />
        <Col xs={24} sm={20} md={12} lg={3} >
          <Button className='footer-btn'>Get in Touch</Button>
        </Col>
        <Col xs={24} sm={20} md={12} lg={5} className="site-contain">
          <div className='site-link'>
            <h1>SITE</h1>
            <p><a href="">Homepage</a></p>
            <p><a href="">Anatha App</a></p>
            <p><a href="">Network</a></p>
            <p><a href="">Enterprise</a></p>
            <p><a href="">About Us</a></p>
            <p><a href="">Learn</a></p>
            <p><a href="">Blog</a></p>
            <p><a href="">Downloads</a></p>
            <p><a href="">Roadmap</a></p>
            <p><a href="">Press</a></p>
            <p><a href="">Help</a></p>
            <p><a href="">Glossary</a></p>
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={5} >
          <div className='social_site-link'>
            <h1>SOCIAL</h1>
            <p><a href="">Discord</a></p>
            <p><a href="">Reddit</a></p>
            <p><a href="">Telegram</a></p>
            <p><a href="">Medium</a></p>
            <p><a href="">Twitter</a></p>
            <p><a href="">Instagram</a></p>
            <p><a href="">YouTube</a></p>
            <p><a href="">Downloads</a></p>
            <p><a href="">Vimeo</a></p>
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={5} >
          <div className='social_site-link'>
            <h1>LANGUAGES</h1>
            <p><a href="https://anatha.io/japanese"><img  alt="????????" src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1ef-1f1f5.svg" data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1ef-1f1f5.svg"/></a></p>
            <p><a href="https://anatha.io/korean"><img alt="????????" src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f0-1f1f7.svg" data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f0-1f1f7.svg"/></a></p>
            <p><a href="https://anatha.io/turkish"><img alt="????????" src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f9-1f1f7.svg" data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1f9-1f1f7.svg"/></a></p>
            <p><a href="https://anatha.io/chinese"><img alt="????????" src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1e8-1f1f3.svg" data-mce-src="https://s.w.org/images/core/emoji/13.0.0/svg/1f1e8-1f1f3.svg"/></a></p>
          </div>
        </Col>
        <Col xs={24} sm={20} md={12} lg={4} />
      </Row>
      <Row className='Footer-row_whitepaper'>
        <Col xs={24} sm={20} md={12} lg={11} />
        <Col xs={24} sm={20} md={12} lg={2} ><Button className='footer-btn'>whitepaper</Button></Col>
        <Col xs={24} sm={20} md={12} lg={11} />
      </Row>
      <Row className='Footer-row_Privacy'>
        <Col xs={24} sm={20} md={12} lg={11} />
        <Col xs={24} sm={20} md={12} lg={2} ><a className="Footer-row_Privacy_link" href="https://www.anatha.io/privacy">Privacy Policy</a></Col>
        <Col xs={24} sm={20} md={12} lg={11} />
      </Row>
      <Row className='Footer-row_Privacy'>
        <Col xs={24} sm={20} md={12} lg={3} />
        <Col xs={24} sm={20} md={12} lg={2} ><img className='protect-img' src={protect} alt="protect"></img></Col>
        <Col xs={24} sm={20} md={12} lg={19} />
      </Row>
      <GoTopButton/>
    </section>
  )
}
