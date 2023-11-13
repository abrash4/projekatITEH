import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 


const slideImages = [
  'https://source.unsplash.com/random/?alcohol',
  'https://source.unsplash.com/random/?city',
  'https://source.unsplash.com/random/?bar'
];

const Pocetna = () => {
 




    return (

      <div> 
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
             
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Pocetna;