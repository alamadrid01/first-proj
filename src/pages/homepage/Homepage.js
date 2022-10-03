import React, {useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import SectionOne from '../../components/section/SectionOne'
import './homepage.scss'
import WebFont from 'webfontloader';
import SectionTwo from '../../components/sectionTwo/SectionTwo';
import SectionThree from '../../components/sectionThree/SectionThree';
import SectionFour from '../../components/sectionFour/SectionFour';
import SectionFive from '../../components/sectionFive/SectionFive';

function Homepage() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Montserrat', 'Lato', 'Abhaya Libre', 'Roboto']
      }
    });
    document.title = 'Webzone'
   }, []);
  return (
    <div className='homepage'>
        
        <div className="homeContainer">
            <Navbar />
            <div className="sectionOneContainer">
              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
            </div>
        </div>
    </div>

  )
}

export default Homepage