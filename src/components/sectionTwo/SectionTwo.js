import React from "react";
import "./sectionTwo.scss";
import pic from "./pic.jpg";

function SectionTwo() {
  return (
    <div>
      <div className="sectionTwo">
        <div className="left">
          <div className="circle">
            <div className="circles">
              <img src={pic} alt="icon" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="text">
            <h2>Simple Solutions!</h2>
            <span>
              We offer our business partners better offers to manage their
              website and keep their business ahead of their competitors
            </span>
            <div className="whole">
              <div className="a">
                <div className="number">1</div>
                <div className="word">
                  <span>Contact us</span>
                  <span>Reach to us via social media or mail</span>
                </div>
              </div>

              <div className="a">
                <div className="number">2</div>
                <div className="word">
                  <span>Consult</span>
                  <span>Our Costumer Care service are available 24/7</span>
                </div>
              </div>

              <div className="a">
                <div className="number">3</div>
                <div className="word">
                  <span>Place order</span>
                  <span>Reach to us via social media or mail</span>
                </div>
              </div>

              <div className="a">
                <div className="number">4</div>
                <div className="word">
                  <span>Payment</span>
                  <span>Make any payment to my account number you like </span>
                </div>
              </div>
            </div>
            <div className="buttons">
              <div className="button">Get started</div>
              <div className="button">Contact me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
