import React, { Component } from 'react';
import BlogBox from './BlogBox.js'

import BasicIcon from '../assets/airbnb.png'

export default class Blog extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
				<div className="col-sm-12 col-md-12 col-lg-12">
					<h1>this is the blog</h1>
				</div>
				<div className="col-sm-8 col-md-8 col-lg-8">
					<BlogBox
						title="To the Roof!"
						tagline="Make Your Roof Tall and Why it Matters and Why You'll Love it"
						imgSrc={BasicIcon}
						body="This expands upon why having tall roofs are amazing. Such as how they make a small place look larger due to high ceilings. 750 sq ft is doubled."
					/>
				</div>
				<div className="col-sm-8 col-md-8 col-lg-8">
					<BlogBox
						title="Small Living, How to Maximize and What's Important"
						tagline="Necessities to Making Small Living Work"
						imgSrc={BasicIcon}
						body="This is how to use 1000 sq ft to your advantage. How to design and optimize space."
					/>
				</div>
			</div>
		)
	}
}

const styles = {
  Blog: {
    backgroundColor: "green"
  }
}
