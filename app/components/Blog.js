import React, { Component } from 'react';


import BlogHeader from './BlogHeader.js'

export default class Blog extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.Blog}>
					<h2>Froggy Oaks Projects</h2>
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12">
					<BlogHeader />
				</div>
			</div>
		)
	}
}

const styles = {
	Blog: {
		padding: "2%",
		textAlign: "center",
		fontFamily: "Courier"
  }
}
