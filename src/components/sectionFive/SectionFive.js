import React from "react";
import "./sectionFive.scss";
import logo from "../../components/navbar/logo.jpg";
import whatsapp from './whatsapp.png'
import twitter from './twitter.png'
import instagram from './instagram.png'


function SectionFive() {
  return (
    <div>
      <div className="sectionFive">
        <div className="a">
          <div className="b">
          <img src={logo} alt="logo" />
            <h3>
              WebZone
            </h3>
          </div>
          <img className="icon" src={whatsapp} alt="icon" />
          <img className="icon" src={twitter} alt="icon" />
          <img className="icon" src={instagram} alt="icon" />
        </div>
        <div className="a">
          <h3>Contact us</h3>
          <p>+234 7049473853</p>
          <p>adebayoalameen88@gmail.com</p>
          <p>adebayoalameen2@gmail.com</p>
        </div>
        <div className="a">
          <h3>Services</h3>
          <p>Performance optimization</p>
          <p>SEO\SEM</p>
          <p>Marketing</p>
          <p>Data Management</p>
        </div>
        <div className="a">
          <h3>About Us</h3>
          <p>News</p>
          <p>About us</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;

