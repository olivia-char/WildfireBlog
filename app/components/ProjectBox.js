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
		if(this.state.isVisable === false ){
			return(
				<div style={this.state.isHighlighted ? styles.styleHighlighted : this.props.style} onMouseOver={this.colorMouseOver.bind(this)} onClick={this.projectBoxClick.bind(this)} >
					<img src={this.props.imgSrc} style={styles.imgStyle}/>
					{this.renderProjectTitle()}
				</div>
			)
		}
	}
	renderProjectTitle() {
		if(!this.state.isHighlighted) {
			return (
				<h3>{this.props.title}</h3>
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
					<div>
						{this.renderProfileBoxOff()}
						<img src={this.props.imgSrc} style={styles.imgStyle}/>
						<h3>{this.props.title}</h3>
						<h3>{this.props.status}</h3>
						<h3>Highlights - </h3>
						<ul>
							<li>{this.props.interest}</li>
						</ul>
						<Link to={this.props.redirect}>More ADU Projects</Link>
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
				<div className="col-sm-10 col-md-10 col-lg-10">
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
		marginBottom:"5%",
    borderRadius: "50%"
	},
	imgStyle: {
		width:"100%",
		marginBottom:"5%",
	}
}
