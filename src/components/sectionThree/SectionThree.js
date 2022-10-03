import React from 'react'
import './sectionThree.scss'
import pic from './pic.jpg'

function SectionThree() {
  return (
    <div>
      <div className="sectionThree">
        <div className="left">
            <div className="text">
                <h2>Our Agency</h2>
                <h4>The WebZone is a reputable company that keep track of  business enterprise database and secure it</h4>
                <p>The company is founded by <span>Aloy Tech</span> in the year 2010 which controls 2000 company database</p>
                <div className="button">
                    Learn More
                </div>
            </div>

        </div>
        <div className="right">
            <div className="circles">
                <div className="circle">
                    <img src={pic} alt="picture" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionThree
