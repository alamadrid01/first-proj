import React from "react";
import "./sectionFour.scss";
import Slider from "../../components/slider/Slider";

function SectionFour() {
  return (
    <div>
      <div className="sectionFour">
        <h1>What Clients Says</h1>
        <div className="holder">
          <div className="left">
            <div className="circles">
              <div className="circle">
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
