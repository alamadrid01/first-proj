import React from "react";
import "./sectionFour.scss";
import Slider from "../../components/slider/Slider";
import pic from './pic.jpg'

function SectionFour() {
  return (
    <div>
      <div className="sectionFour">
        <h1>What Clients Says</h1>
        <div className="holder">
          <div className="left">
            <div className="circles">
              <div className="circle">
                {/* <img src={pic} alt="pic" /> */}
              </div>
            </div>
          </div>
          <div className="right">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
