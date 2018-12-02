import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class ProfileBox extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render() {
    return(
      <div>
        <img src={this.props.imgSrc} style={styles.imgStyle}/>
        <h3>{this.props.title}</h3>
        <h3>{this.props.status}</h3>
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
