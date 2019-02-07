import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

export default class ProfileBox extends Component {
	constructor(props){
		super(props)
	}
	render() {
    const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,

    };
		return (
      <div className="row" style={styles.ProfileBoxBackground}>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.ProfileBoxTitle}>
          <h2>{this.props.title}</h2>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <p>- <span>{this.props.status}</span> -</p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <Slider {...settings} className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <img src={this.props.imgSlide1} style={styles.ImgStyle}/>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <img src={this.props.imgSlide2} style={styles.ImgStyle}/>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <img src={this.props.imgSlide3} style={styles.ImgStyle}/>
            </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12" >
              <img src={this.props.imgSlide4} style={styles.ImgStyle}/>
            </div>
          </Slider>

        </div>
        <div className="col-10 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1" style={styles.ProfileBoxHighlight}>
          <h4>Highlights:</h4>
          <ul>
            <span><li>{this.props.interest}</li></span>
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <Link to={this.props.redirect} className="ProjectBox_Link">Click Here for Projects</Link>
        </div>
      </div>

		)
	}
}

const styles = {
  ProfileBoxBackground: {
    backgroundColor:"#8B94A3",
    textAlign:"center",
    fontFamily: "Courier",
    color: "#E8E9F3",
    padding: "3% 0% 2% 0%",
    border: "1px solid #1F363D",
  },
  ProfileBoxTitle: {
		fontFamily: "Mellony",
	},
	ProfileBoxHighlight: {
		textAlign: "left",
    marginTop: "-10%"
	},
  ImgStyle: {
    width: "100%",
    height: "500px",
    border: "1px solid black"
  }
}
