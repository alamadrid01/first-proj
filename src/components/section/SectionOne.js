import React from "react";
import "./section.scss";
import pic from "./pic.jpg";
import Table from "./Table";

function SectionOne() {
  return (
    <div>
      <div className="sectionOne">
        <div className="left">
          <div className="text">
            <h1>we create </h1>
            <h1> solutions for your </h1>
            <h1>
              {""}
              <span>business and website</span>
            </h1>
            <p>
              We offer great solutions for your website and business like{" "}
              <span>
                securing and managing of database, performance and optimizations
                and ...
              </span>
            </p>
          </div>
          <div className="button">Get Started</div>
        </div>
        <div className="right">
          <img src={pic} alt="profile-picture" />
        </div>
      </div>

      <div className="bottomContainer">
        <span>We provide the Best Services</span>
        <div className="bottom">
          <Table type= 'Performance' />
          <Table type= 'Marketing' />
          <Table type= 'SEO' />
          <Table type= 'Data Management' />
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
