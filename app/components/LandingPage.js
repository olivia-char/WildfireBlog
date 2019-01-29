import React, { Component } from 'react';

import ProjectBox from './ProjectBox'
import Header from './Header.js'
import BasicIcon from '../assets/airbnb.png'
import Compass from '../assets/compass.png'
import BasicImage from '../assets/compass.png'
import WaterTower1 from '../assets/waterTower1.png'

import BackgroundMap from '../assets/FroggyOaksIcons/PropertyMap.png'
import MoundIcon from '../assets/FroggyOaksIcons/Mound.png'
import GardenIcon from '../assets/FroggyOaksIcons/Garden.png'
import WaterTowerIcon from '../assets/FroggyOaksIcons/WaterTower.png'
import WindMillIcon from '../assets/FroggyOaksIcons/WindMill.png'
import MainHouseIcon from '../assets/FroggyOaksIcons/ArtboardMainHouse.png'
import PoolIcon from '../assets/FroggyOaksIcons/Pool.png'
import SolarPanelIcon from '../assets/FroggyOaksIcons/SolarPanel.png'
import ADUIcon from '../assets/FroggyOaksIcons/ADU.png'


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

        <div className="row" style={styles.OuterMapRow}>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<ProjectBox
						imgSrc={MoundIcon}
						imgSlide1={BasicImage}
						imgSlide2={BasicImage}
						imgSlide3={BasicImage}
						imgSlide4={BasicImage}
						title="Mound"
						status="Completed"
						interest="New septic technology"
						redirect="/gnome_home_projects"
						style={styles.complete}
						info="this is a new type of tank with a smaller mound"
						/>
        	</div>
					<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
						<ProjectBox
						imgSrc={GardenIcon}
						imgSlide1={BasicImage}
						imgSlide2={BasicImage}
						imgSlide3={BasicImage}
						imgSlide4={BasicImage}
						title="Garden"
						status="Incomplete"
						interest="Year Round Garden"
						redirect="/landscaping_projects"
						style={styles.partial}
						info="french style garden, need to fix permiter and build pagoda."
						/>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
						<ProjectBox
						imgSrc={WaterTowerIcon}
						imgSlide1={WaterTower1}
						imgSlide2={WaterTower1}
						imgSlide3={WaterTower1}
						imgSlide4={WaterTower1}
						title="Water Tower"
						status="Complete"
						interest="Natural Aquifer"
						redirect="/landscaping_projects"
						style={styles.complete}
						/>
          </div>
				</div>
				<div className="row" style={styles.InnerMapRow}>
					<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" >
						<ProjectBox
						imgSrc={WindMillIcon}
						imgSlide1={BasicImage}
						imgSlide2={BasicImage}
						imgSlide3={BasicImage}
						imgSlide4={BasicImage}
						title="Wind Mill"
						status="Incomplete"
						interest="Creates 30 percent electricty"
						redirect="/landscaping_projects"
						style={styles.broken}
						/>
          </div>
					<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
						<ProjectBox
							imgSrc={MainHouseIcon}
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
				<div className="row" style={styles.InnerMapRow}>
					<div className="col-sm-3 offset-sm-6 col-md-3 offset-md-6 col-lg-3 offset-lg-6">
						<ProjectBox
						imgSrc={PoolIcon}
						imgSlide1={BasicImage}
						imgSlide2={BasicImage}
						imgSlide3={BasicImage}
						imgSlide4={BasicImage}
						title="Pool"
						status="Incomplete"
						interest="Wading pool addition"
						redirect="/pool_projects"
						style={styles.partial}
						/>
          </div>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<ProjectBox
						imgSrc={SolarPanelIcon}
						imgSlide1={BasicImage}
						imgSlide2={BasicImage}
						imgSlide3={BasicImage}
						imgSlide4={BasicImage}
						title="Solar Array"
						status="Incomplete"
						interest="100 percent sustainable"
						redirect="/landscaping_projects"
						style={styles.complete}
						/>
					</div>
				</div>
				<div className="row" style={styles.OuterMapRow}>
					<div className="col-sm-3 offset-sm-2 col-md-3 offset-md-2 col-lg-3 offset-lg-2">
						<ProjectBox
							imgSrc={ADUIcon}
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
		backgroundImage: "url("+ BackgroundMap +")",
		backgroundSize: "cover",
		height: "100%",
		width: "100%",
		textAlign: "center",
  },
	MapTitle: {
		textAlign:"center",
		padding: "3%",

		fontFamily: "Courier"
	},
	MapCompass: {
		width: "60px",
		transform: "rotate(315deg)",
	},
	OuterMapRow: {
		postion: "relative",
		marginTop: "2%"
	},
	InnerMapRow: {
		postion: "relative",
		marginTop: "5%"
	},
  complete: {
    boxShadow: "0px 0px 0px 5px #294936",
    borderRadius: "50%",
		height: "100%",
		width: "200px",
		padding: "5%",
  },
  partial: {
    boxShadow: "0px 0px 0px 5px #F19953",
    borderRadius: "50%",
		padding: "5%",
		width: "200px",
		height: "100%",
  },
  broken: {
    boxShadow: "0px 0px 0px 5px #A52422",
    borderRadius: "50%",
		padding: "5%",
		width: "200px",
		height: "100%"
  },

}
