import React, { Component } from 'react';
import BlogBox from './BlogBox.js'

import BasicIcon from '../assets/airbnb.png'

export default class PoolProjects extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row">
			<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.Blog}>
				<h2>Froggy Oaks Pool Projects</h2>
			</div>
      <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
        <BlogBox
          title="Upgading a pool"
          tagline="Make Your Roof Tall and Why it Matters and Why You'll Love it"
          imgSrc={BasicIcon}
          paraOne="This expands upon why having tall roofs are amazing. Such as how they make a small place look larger due to high ceilings. 750 sq ft is doubled."
          paraTwo="this is the second paragraph"
        />
      </div>
      <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
        <BlogBox
          title="How to incorporate existing structures"
          tagline="Necessities to Making Small Living Work"
          imgSrc={BasicIcon}
          paraOne="This is how to use 1000 sq ft to your advantage. How to design and optimize space."
          paraTwo="this is the second paragraph"
          paraThree="and sometimes they can have a third if neccesary"
        />
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
