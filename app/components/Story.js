import React, { Component } from 'react';
import Vine from '../assets/vineyard.jpg'

export default class Story extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
				<div className="col-6 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-6 offset-lg-3" style={styles.StoryBox}>
					<div className="row">
						<div className="col-12 col-sm-12 col-md-12 col-lg-12">
							<h2 style={styles.StoryHeader}>October 2017, Nuns Canyon Fire</h2>
							<p>The 27th Annual Glen Ellen Village Fair was a beautiful day. Everyone had come to the fair to celebrate the one day we shut down our only road through town. Neighbors had parties, local artists showcased their talents, the fire fighters sold local beer and everyone hoped to win the annual Glen Ellen inspired quilt.</p>
							<p>As the day progressed the wind picked up and we left the fair. We dispersed amongst our home, most of us went to sleep, only a couple stayed awake. Later in the evening the wind grew stronger and wafted smoke into the opened windows. By the time we had all awoken the air was filled with soot and flames were across the road. There was no other choice but to leave instantly, only taking our pets and some important documents. Optimistically, we all thought we would come right back.</p>
							<p>That night changed Froggy Oaks forever. Within fifteen minutes our home caught fire and burned to the ground. Fires had overwhelmed Sonoma and Napa County rendering us defenseless. The majority of our family heirlooms and memories vanished into smoke. We were fortunate to have loving friends and family to help us in our time of need. But we needed time to heal from the shock of loss.</p>
							<p>However, good memories do last forever. We could not stop thinking of all good memories, and now we look forward to creating new memories and a new family home. This website is to commemorate what we have lost, to demonstrate what we achieve to build and to enlighten others on the impact of California wildfires.</p>
						</div>
						<div className="col-6 col-sm-6 offset-sm-6 col-md-6 offset-md-6 col-lg-6 offset-lg-6" style={styles.FontStyle}>
							<h5>Best Wishes,</h5>
							<h3>Froggy Oaks</h3>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const styles = {
  Blog: {
    backgroundImage: "url(" + Vine + ")",
		backgroundSize: "cover",
		padding: "3%",
  },
	StoryBox: {
		backgroundColor: "#E8E9F3",
		padding: "5%",
		borderRadius: "2%",
	},
	FontStyle: {
		fontFamily: "Mellony",
		marginBottom: "4%"
	},
	StoryHeader: {
		fontFamily: "Mellony",
		textAlign: "center",
		marginBottom: "5%"
	}
}
