import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class ProjectBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			isHighlighted: true,
		}
	}
	renderGreyBox() {
			return(
				<div style={this.state.isHighlighted ? styles.styleGrey : this.props.style} onMouseOver={this.greyMouseOver.bind(this)}>
            <img src={this.props.imgSrc} style={styles.imgStyle}/>
            <a href={this.props.link} target="_blank"><h3>{this.props.title}</h3></a>

				</div>
			)
	}
	greyMouseOver() {
		this.setState({
			isHighlighted:false,
		})
	}
	greyMouseOut() {
		this.setState({
			isHighlighted:true
		})
	}
	render() {
		return (
      <div onMouseEnter={this.greyMouseOver.bind(this)} onMouseOut={this.greyMouseOut.bind(this)}>
				{this.renderGreyBox()}
			</div>
		)
	}
}
const styles = {
	styleGrey: {
		textAlign:"center",
		marginBottom:"5%",
    borderRadius: "50%"
	},
	imgStyle: {
		width:"100%",
		marginBottom:"5%",
	}
}
