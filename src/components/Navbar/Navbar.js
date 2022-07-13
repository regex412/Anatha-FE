import React from "react";
import "./Navbar.css";

import Anathalogo from "../../assets/Anatha-logo.png"
import { MenuOutlined } from '@ant-design/icons'

const Navbar = ({ toggle }) => {
  return (
    <nav>
       <div className="nav">
      </div>
      <div className="menu-items">
        <a href="/service"><img src={Anathalogo} alt="Anathalogo" className='img_anathalogo' /></a>
      </div>
      <div className="icons">
        <div className="mobile-menu-icon">
          <MenuOutlined onClick={toggle} className="MenuOutlined"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
