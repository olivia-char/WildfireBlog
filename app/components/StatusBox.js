import React, { Component } from 'react'

export default class StatusBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			isHighlighted: true,
			isVisable: false
		}
	}

	renderStatusColor() {
		if(this.state.isVisable === false){
			return(
				<div style={this.state.isHighlighted ? styles.styleHighlighted : this.props.style} onMouseOver={this.colorMouseOver.bind(this)} >
					<img src={this.props.imgSrc} style={styles.imgStyle} />
				</div>
			)
		}
	}
	renderProjectTitle() {
		if(!this.state.isHighlighted) {
			return (
				<h5>{this.props.title}</h5>
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
			<div onMouseEnter={this.colorMouseOver.bind(this)} onMouseOut={this.colorMouseOut.bind(this)}>
				{this.renderStatusColor()}
				<div style={styles.StatusTitle}>
					{this.renderProjectTitle()}
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
	},
	imgStyle: {
		width: "100%",
	},
	StatusTitle: {

		fontFamily: "Mellony",
		marginTop: "8%"
	},
}
