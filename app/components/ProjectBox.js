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
				{this.renderProjectTitle()}
			</div>
		)
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
	render() {
		return (
			<div>
				<div onMouseEnter={this.colorMouseOver.bind(this)} onMouseOut={this.colorMouseOut.bind(this)}>
					{this.renderStatusColor()}
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
