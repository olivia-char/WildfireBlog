import React, { Component } from 'react';
import BlogBox from './BlogBox.js'
import BlogHeader from './BlogHeader.js'
import BlogImage1 from '../assets/AduImages/PathwayCollage.png'


export default class LandscapingProjects extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.BlogTitle}>
					<h2>Froggy Oaks Landscaping Projects</h2>
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12">
					<BlogHeader />
				</div>

	      <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
					<BlogBox
					 title="Creating the Right Path"
					 date="February 18"
					 tagline="How Are We Going To Build This Thing?"
					 imgSrc={BlogImage1}
					 paraOne="At the moment our path includes an old bridge and loose flagstone pieces, as well as a mix of hay and grass seed. With all the recent rain the property has become a mud pit and we are trying to grow grass as fast as possible. So while we wait and try to thwart the birds from eating our seeds, we are planning our pathway."
					 paraTwo="Our current ideas incorporate the old flagstone, our abundant natural rocks and concrete pavers to create a pathway around The Coop'."
					 paraThree="As of now, we are looking at different paver molds and are waiting for the rains to subside. We'll keep you posted!"
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
