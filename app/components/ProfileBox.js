import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
				<h3>{this.props.highlights}</h3>
				<ul>
					<li><Link to={this.props.redirect}>{this.props.interest}</Link></li>
				</ul>
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
