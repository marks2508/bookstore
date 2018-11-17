import React from 'react';
import Carousel from 'nuka-carousel';


const style = {
  boxShadow: '1px 2px 2px 1px #dedede inset'
};

class Slider extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    return (
      <div className="container">
        <div col-6>
          <Carousel
            style={style}
            autoplay={true}
            slidesToScroll={'auto'}
            withoutControls={true }
            wrapAround={true}
            slideIndex={this.state.slideIndex}
            afterSlide={slideIndex => this.setState({ slideIndex })}
          >
            <img src="../assets/sandoe3.jpg" />
            <img src="../assets/sandoe4.jpg" />
            <img src="../assets/sandoe9.jpg" />
            <img src="../assets/sandoe20.jpg" />
            <img src="../assets/sandoe5.jpg" />
          </Carousel>
          <hr />
        </div>
      </div>
    );
  }
}

export default Slider;
