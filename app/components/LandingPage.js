import React, { Component } from 'react';

import ProjectBox from './ProjectBox'
import Header from './Header.js'
import BasicIcon from '../assets/airbnb.png'
import Compass from '../assets/compass.png'
import BasicImage from '../assets/compass.png'

export default class LandingPage extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
      <div style={styles.background}>
	
        <div className="row" style={styles.MapTitle}>
          <div className="col-3 col-sm-3 offset-sm-2 col-md-3 offset-md-2 col-lg-3 offset-lg-2">
						  <h3>Sonoma County</h3>
				  </div>
					<div className="col-2 col-sm-2 col-md-2 col-lg-2">
						<img src={Compass} style={styles.MapCompass}/>
					</div>
					<div className="col-3 col-sm-3 col-md-3 col-lg-3">
							<h3>Rebuilding Map</h3>
					</div>
        </div>
        <div className="row" style={styles.MapRow}>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<ProjectBox
						imgSrc={BasicIcon}
						imgSlide1={BasicImage}
						imgSlide2={BasicImage}
						imgSlide3={BasicImage}
						imgSlide4={BasicImage}
						title="Mound"
						status="Incomplete"
						interest="Pitched Roof"
						redirect="/gnome_home_projects"
						style={styles.broken}
						info="this is a new type of tank with a smaller mound"
						/>
        	</div>
					<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
						<ProjectBox
						imgSrc={BasicIcon}
						imgSlide1={BasicImage}
						imgSlide2={BasicImage}
						imgSlide3={BasicImage}
						imgSlide4={BasicImage}
						title="Garden"
						status="Incomplete"
						interest="Pitched Roof"
						redirect="/landscaping_projects"
						style={styles.partial}
						info="french style garden, need to fix permiter and build pagoda."
						/>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
						<ProjectBox
						imgSrc={BasicIcon}
						imgSlide1={BasicImage}
						imgSlide2={BasicImage}
						imgSlide3={BasicImage}
						imgSlide4={BasicImage}
						title="Water Tower"
						status="Incomplete"
						interest="Pitched Roof"
						redirect="/main_house_projects"
						style={styles.complete}
						/>
          </div>
				</div>
				<div className="row" style={styles.MapRow}>
					<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" >
						<ProjectBox
						imgSrc={BasicIcon}
						imgSlide1={BasicImage}
						imgSlide2={BasicImage}
						imgSlide3={BasicImage}
						imgSlide4={BasicImage}
						title="Wind Mill"
						status="Incomplete"
						interest="Pitched Roof"
						redirect="/landscaping_projects"
						style={styles.broken}
						/>
          </div>
					<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" >
						<ProjectBox
							imgSrc={BasicIcon}
							imgSlide1={BasicImage}
							imgSlide2={BasicImage}
							imgSlide3={BasicImage}
							imgSlide4={BasicImage}
							title="Main House"
							status="Incomplete"
							interest="Pitched Roof"
							redirect="/main_house_projects"
							style={styles.broken}
						/>
          </div>
				</div>
				<div className="row" style={styles.MapRow}>
					<div className="col-sm-3 offset-sm-6 col-md-3 offset-md-6 col-lg-3 offset-lg-6">
						<ProjectBox
						imgSrc={BasicIcon}
						imgSlide1={BasicImage}
						imgSlide2={BasicImage}
						imgSlide3={BasicImage}
						imgSlide4={BasicImage}
						title="Pool"
						status="Incomplete"
						interest="Pitched Roof"
						redirect="/pool_projects"
						style={styles.partial}
						/>
          </div>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<ProjectBox
						imgSrc={BasicIcon}
						imgSlide1={BasicImage}
						imgSlide2={BasicImage}
						imgSlide3={BasicImage}
						imgSlide4={BasicImage}
						title="Solar Array"
						status="Incomplete"
						interest="Pitched Roof"
						redirect="/landscaping_projects"
						style={styles.complete}
						/>
					</div>
				</div>
				<div className="row" style={styles.MapRow}>
					<div className="col-sm-3 offset-sm-2 col-md-3 offset-md-2 col-lg-3 offset-lg-2">
						<ProjectBox
							imgSrc={BasicIcon}
							imgSlide1={BasicImage}
							imgSlide2={BasicImage}
							imgSlide3={BasicImage}
							imgSlide4={BasicImage}
							title="Gnome Home"
							status="Incomplete"
							interest="Pitched Roof"
							redirect="/gnome_home_projects"
							style={styles.partial}
						/>
          </div>
				</div>
      </div>
		)
	}
}
const styles = {
  background: {

		padding: "3% 0% 5% 0%",
  },
	MapTitle: {
		textAlign:"center",
		paddingBottom: "3%",
		marginBottom: "3%",
		fontFamily: "courier"
	},
	MapCompass: {
		width: "60px",
		transform: "rotate(315deg)",
	},
	MapRow: {
		margin: "0% 0% 5% 0%"
	},
	MapBox: {
		textAlign: "center"
	},
  complete: {
    boxShadow: "0px 0px 0px 5px green",
    borderRadius: "50%",
    textAlign:"center",
  },
  partial: {
    boxShadow: "0px 0px 0px 5px orange",
    borderRadius: "50%",
    textAlign:"center",
  },
  broken: {
    boxShadow: "0px 0px 0px 5px red",
    borderRadius: "50%",
    textAlign:"center",
  },

}
