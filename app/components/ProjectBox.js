import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
						<img src={this.props.imgSrc} style={styles.imgStyle}/>
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
							{this.renderProjectTitle()}
					</div>
				</div>
			)
		}
	}
	renderProjectTitle() {
		if(!this.state.isHighlighted) {
			return (
				<h3 style={styles.ProjectTitle}>{this.props.title}</h3>
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
			return(
					<div className="row" style={styles.background}>
						{this.renderProfileBoxOff()}
						<div className="col-8 col-sm-8 offset-sm-1 col-md-8 offset-md-1 col-lg-8 offset-lg-1">
								<img src={this.props.imgSrc} style={styles.imgStyle}/>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-12">
							<h3>{this.props.title}</h3>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-12">
							<h3>{this.props.status}</h3>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-12">
							<h3>Highlights - </h3>
							<ul>
								<li>{this.props.interest}</li>
							</ul>
							<Link to={this.props.redirect}>More ADU Projects</Link>
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
				<div style={styles.noMove}>
					<h3 onClick={this.profileBoxOff.bind(this)}>X</h3>
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
				<div className="col-sm-6 col-md-6 col-lg-6" style={styles.StatusBox}>
					{this.renderStatusColor()}
				</div>
				<div className="col-sm-12 col-md-12 col-lg-12">
					{this.renderProfileBox()}
				</div>
			</div>

		)
	}
}
const styles = {
	styleHighlighted: {
		textAlign:"center",
    borderRadius: "50%",
	},
	imgStyle: {
		width:"100%",
		margin:"5% 0% 5% 0%",
	},
	background: {
		backgroundColor: "grey",
		padding: "5%",
		textAlign:"center",
		margin: "1%",
	},
	ProjectTitle: {
		padding: "2% 0% 5% 0%"
	},
	StatusBox: {
		height: "150px"
	}
}
