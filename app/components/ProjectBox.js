import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


export default class ProjectBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			isHighlighted: true,
			isClicked: false,
		}
	}
	renderStatusColor() {
			return(
				<div style={this.state.isHighlighted ? styles.styleHighlighted : this.props.style} onMouseOver={this.colorMouseOver.bind(this)}>
          <img src={this.props.imgSrc} style={styles.imgStyle}/>
        	<h3>{this.props.title}</h3>
				</div>
			)
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

	statusBoxClick() {
		this.setState({
			isClicked: true
		})
		console.log("i've been clicked")

	}
	profileBoxOff() {
		this.setState({
			isClicked: false
		})
			console.log("close button clicked")
	}
	renderProfileBox() {
		if(this.state.isClicked === true) {
			return(
				<div>
					<h3 onClick={this.profileBoxOff.bind(this)}>close</h3>
					<img src={this.props.imgSrc} style={styles.imgStyle}/>
					<h3>{this.props.title}</h3>
					<h3>{this.props.status}</h3>
    		</div>
			)
		}
	}
	render() {
		return (
			<div>
				<div onClick={this.statusBoxClick.bind(this)} onMouseEnter={this.colorMouseOver.bind(this)} onMouseOut={this.colorMouseOut.bind(this)}>
					{this.renderStatusColor()}
				</div>
				<div>
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
