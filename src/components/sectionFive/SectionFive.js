import React from "react";
import "./sectionFive.scss";
import logo from "../../components/navbar/logo2.svg";
import whatsapp from './whatsapp.png'
import twitter from './twitter.png'
import instagram from './instagram.png'


function SectionFive() {
  return (
    <div>
      <div className="sectionFive">
        <div className="a">
          <div className="b">
          {/* <img src={logo} alt="logo" /> */}
            <h3>
              WebZone
            </h3>
          </div>
          <div className="logo">
                    <div className="twitter"> <a href="https://twitter.com/AdebayoAlameen?t=3L1ljJkyQUhndD4AviGltg&s=09"><img src={twitter}  alt="icon" /></a></div>
                    <div className="whatsapp"> <a href="https://api.whatsapp.com/send?phone=+234 813 689 4051&text=hi"><img src= {whatsapp} alt="icon" /></a>  </div>
                    <div className="instagram"><a href="https://instagram.com/alamadrid_d"> <img src= {instagram} alt="icon" /></a></div>
                </div>
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

