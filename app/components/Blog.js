import React, { Component } from 'react';

import Flower from '../assets/4.png'
import BlogHeader from './BlogHeader.js'

export default class Blog extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className="row" style={styles.Blog}>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.BlogTitle}>
					<h2>Froggy Oaks Projects</h2>
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12">
					<BlogHeader />
				</div>
				<div className="col-2 col-sm-2 offset-sm-5 col-md-2 offset-md-5 col-lg-2 offset-lg-5" style={styles.FlowerImg}>
					<img src={Flower} width="100%" />
				</div>
			</div>
		)
	}
}

const styles = {
	Blog: {
		backgroundColor: "#E8E9F3"
	},
	BlogTitle: {
		padding: "2%",
		marginTop: "2%",
		textAlign: "center",
		fontFamily: "Courier",
  },
	FlowerImg: {
		marginTop: "5%",
		marginBottom: "2%"

	}
}
