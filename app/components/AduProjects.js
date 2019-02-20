import React, { Component } from 'react';
import BlogBox from './BlogBox.js'
import BlogHeader from './BlogHeader.js'
import BlogImage1 from '../assets/AduImages/ToDoList.png'

export default class AduProjects extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.BlogTitle}>
					<h2>Froggy Oaks The Coop' Projects</h2>
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12">
					<BlogHeader />
				</div>
	      <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
	        <BlogBox
	          title="The Last 'To Do List'"
						date="February 18"
	          tagline="The Constant Finishing Touches Inside and Out"
	          imgSrc={BlogImage1}
	          paraOne="Here is a list of things we still need to do, it's a small list, but each item we add doubles the list."
	          paraTwo="So here it goes - the half bathroom needs to be wallpapered, the closet door needs to be painted, parts of the trim still needs nail setting, putty and paint, every window frame needs to be stained, the bridge needs restoration, as well as building an actual pathway from the driveway to The Coop', the deck needs an apron and every now and then I notice a spot on the wall that needs paint. Once we have the final inspection we can secure the dishwasher to the floor. And lastly, I know I forgot something important."
						paraThree="What I have learned in this brief and chaotic building process is that there are constant minute choices. Even with a small 696 sq. ft home."
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
		fontFamily: "Courier",

	}
}
