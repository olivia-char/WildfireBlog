import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import BasicIcon from '../assets/airbnb.png'

export default class ProjectBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			isHighlighted: true,
			isClicked: false,
			isVisable: false
		}
	}
	renderStatusColor() {
		if(this.state.isVisable === false){
			return(
				<div className="row" style={this.state.isHighlighted ? styles.styleHighlighted : this.props.style} onMouseOver={this.colorMouseOver.bind(this)} onClick={this.projectBoxClick.bind(this)} >
					<div className="col-sm-12 col-md-12 col-lg-12">
						<img src={this.props.imgSrc} style={styles.imgStyle} />
					</div>
					<div className="col-sm-12 col-md-12 col-lg-12">
						{this.renderProjectTitle()}
					</div>
				</div>
			)
		}
	}
	renderProjectTitle() {
		if(!this.state.isHighlighted) {
			return (
				<h5 style={styles.ProjectTitle}>{this.props.title}</h5>
			)
		}
	}
	colorMouseOver() {
		this.setState({
			isHighlighted:false,
		})
	}
	colorMouseOut() {
		this.setState({
			isHighlighted:true
		})
	}
	renderProfileBox() {
		if(this.state.isVisable === true) {
			const settings = {
			 dots: true,
			 infinite: true,
			 speed: 500,
			 slidesToShow: 1,
			 slidesToScroll: 1,
			 autoPlay: false,
			 arrows: false
		 };
			return(
					<div className="row" style={styles.background}>
						<div className="col-1 col-sm-1 offset-sm-10 col-md-1 offset-md-10 col-lg-1 offset-lg-10" style={styles.exitBox}>
							{this.renderProfileBoxOff()}
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.blah}>
							<Slider {...settings} className="row">
								<div className="col-12 col-sm-12 col-md-12 col-lg-12">
									<img src={this.props.imgSlide1} style={styles.projectBoxStyle} />
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-12">
									<img src={this.props.imgSlide2}  style={styles.projectBoxStyle}/>
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-12">
									<img src={this.props.imgSlide3}  style={styles.projectBoxStyle}/>
								</div>
							<div className="col-12 col-sm-12 col-md-12 col-lg-12" >
									<img src={this.props.imgSlide4} style={styles.projectBoxStyle}/>
								</div>
							</Slider>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.ProfileBoxTitle}>
							<h2>{this.props.title}</h2>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-12">
							<p>- {this.props.status} -</p>
						</div>
						<div className="col-10 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-12 offset-lg-1" style={styles.ProfileBoxHighlight}>
							<h4>Highlights:</h4>
							<ul>
								<li>{this.props.interest}</li>
							</ul>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.ProfileBoxLink}>
							<Link to={this.props.redirect}>Click Here for Projects</Link>
						</div>
					</div>
			)
		}
	}
	projectBoxClick() {
		this.setState({
			isClicked: true,
			isVisable: true,
		})
		console.log("i've been clicked")
	}
	renderProfileBoxOff() {
		if(this.state.isClicked) {
			return (
				<div>
					<h5 onClick={this.profileBoxOff.bind(this)}>X</h5>
				</div>
			)
		}
			console.log("close button clicked")
	}
	profileBoxOff() {
		this.setState({
			isClicked: false,
			isVisable: false
		})
	}

	render() {
		return (
			<div className="row" onMouseEnter={this.colorMouseOver.bind(this)} onMouseOut={this.colorMouseOut.bind(this)}>
				<div className="col-sm-12 col-md-12 col-lg-12" style={styles.box}>
					{this.renderProfileBox()}
				</div>
				<div className="col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-6 offset-lg-3" style={styles.StatusBox}>
					{this.renderStatusColor()}
				</div>
			</div>

		)
	}
}
const styles = {

	styleHighlighted: {
		textAlign:"center",
    borderRadius: "50%",
		padding: "5%",
		width: "200px",
		height: "100%"
	},
	imgStyle: {
		width: "100%",
		height: "175px"
	},
	background: {
		backgroundColor:"#8B94A3",
		textAlign:"center",
		margin: "0% 4% 0% 4%",
		fontFamily: "Courier",
		color: "#E8E9F3"
	},
	ProjectTitle: {
		padding: "2% 0% 5% 0%",
		fontFamily: "Mellony"
	},
	StatusBox: {
		width: "100%",
		height: "225px",
		marginBottom: "2%",
	},
	popUpTitle: {
		margin: "0% 2% 0% 2%",
	},
	blah: {
		marginBottom: "10%",
	},
	projectBoxStyle: {
		width: "100%"
	},
	ProfileBoxTitle: {
		fontFamily: "Mellony",
		paddingTop: "5%"
	},
	ProfileBoxHighlight: {
		textAlign: "left",
	},
	exitBox: {
		paddingTop: "3%"
	},
	ProfileBoxLink: {
		paddingBottom: "3%"
	}
}
