import React, { Component } from 'react';
import Slider from "react-slick";

export default class ImageSlider extends Component {
	constructor(props){
		super(props)
	}
	render() {
    const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoPlay: false,
     centerMode: true,
   };
		return (
          <Slider {...settings}>
            <div>
              <img src={this.props.imgSlide} style={styles.imgSliderStyle}/>
            </div>
            <div>
              <img src={this.props.imgSlide} style={styles.imgSliderStyle}/>
            </div>
            <div>
              <img src={this.props.imgSlide} style={styles.imgSliderStyle}/>
            </div>
            <div>
              <img src={this.props.imgSlide} style={styles.imgSliderStyle}/>
            </div>
          </Slider>


		)
	}
}

const styles = {
  imgSliderStyle: {
    width: "100%"
  }
}
