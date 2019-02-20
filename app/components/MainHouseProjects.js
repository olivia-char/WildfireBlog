import React, { Component } from 'react';
import BlogBox from './BlogBox.js'
import BlogHeader from './BlogHeader.js'
import BasicIcon from '../assets/airbnb.png'
import MainHouseImg from '../assets/MainHouseImages/MainHouse4.png'
import BlogImg1 from '../assets/MainHouseImages/OgProperty.png'
import BlogImg2 from '../assets/MainHouseImages/Garage1.png'


export default class MainHouseProjects extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.BlogTitle}>
					<h2>Froggy Oaks Main House Projects</h2>
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12">
					<BlogHeader />
				</div>
				<div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
					<BlogBox
						title="The Main House Action Plan"
						date="February 19"
						tagline="Let's Take a Break and Think About the Garage"
						imgSrc={BlogImg2}
						paraOne="As of now we are taking a break from the building development. For us first time builders getting The Coop' finished was stressful enough. However, building The Coop' first was a blessing in disguise."
						paraTwo="Through our first build we have now found good and reliable contractors and distributors. We have definitely learned the &quot;do's&quot; and the &quot;do not's&quot; - word to the wise triple check how door swings into a room. Most of all we have learned how important it is to properly plan."
						paraThree="Once the last to do's for The Coop' are finished we are going to build the Main House Garage. Currently we have the stem wall foundation complete and are reevaluating stylistic choices. But like I said, we need to take a breather and review our plans."
					/>
				</div>
	      <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
	        <BlogBox
	          title="Starting From Scratch"
						date="Febuary 18"
	          tagline="When Building is the Last Thing on Your Mind"
	          imgSrc={BlogImg1}
	          paraOne="A day after the fire, and after showing identification and pleading with two different police blockades - Thank you Oakland and Alameda Police Departments for helping! - we walked a mile to Froggy Oaks."
	          paraTwo="As we walked closer the air became more toxic, trees still smoldered and telephone wires haphazardly crossed the road. Homes I'd known my entire life vanished, the destruction of the Fire was evident. At first glance Froggy Oaks looked unscathed, the gate was there, so was the windmill, but as you looked closer and entered the property, it was unrecognizable."
						paraThree="To be honest, I thought we would have a home to go back to. It took us a while to proccess, since loosing our home was the last thing on our minds. But after, we all agreed Froggy Oaks was too beautiful to let go - so we will rebuild."
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
