import React from 'react';
import Slider from './Carousel.js';
import About from './about';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Slider />
        
        <About />
      </div>
    );
  }
}

export default LandingPage;
