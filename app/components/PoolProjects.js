import React, { Component } from 'react';
import BlogBox from './BlogBox.js'
import BlogHeader from './BlogHeader.js'
import BlogImage1 from '../assets/PoolImages/NewPoolAdd.png'

export default class PoolProjects extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.BlogTitle}>
					<h2>Froggy Oaks Pool &amp; Patio Projects</h2>
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12">
					<BlogHeader />
				</div>
	      <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
	        <BlogBox
	          title="Redesigning a Centerpiece"
						date="February 18"
	          tagline="Incorportaing the Old with the New"
	          imgSrc={BlogImage1}
	          paraOne="Ever since we were children we begged for a hot tub. But to no avail, there was never the right spot for it, or so said our parents. With what's happened, now seems like a perfect time to get one. And with that one addition we thought why not, let's update the pool too."
	          paraTwo="The original pool structure is the same size with a 3ft shallow end and 9ft deep end. We've added a walk-in wading pool with an inground umbrella attachment and built in stairs large enough to lounge on. We also plan on adding a cabana to cover the hot tub area."
						paraThree="We are very much looking forward to a working hot tub."
					/>
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
		fontFamily: "Courier"
  }
}
