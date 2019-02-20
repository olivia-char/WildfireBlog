import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js'
import StatusBox from './StatusBox.js'
import ProfileBox from './ProfileBox.js'
import Footer from './Footer.js'
import Compass from '../assets/compass.png'

import BackgroundMap from '../assets/FroggyOaksIcons/PropertyMap.png'
import MoundIcon from '../assets/FroggyOaksIcons/Mound.png'
import GardenIcon from '../assets/FroggyOaksIcons/Garden.png'
import WaterTowerIcon from '../assets/FroggyOaksIcons/WaterTower.png'
import WindMillIcon from '../assets/FroggyOaksIcons/WindMill.png'
import MainHouseIcon from '../assets/FroggyOaksIcons/ArtboardMainHouse.png'
import PoolIcon from '../assets/FroggyOaksIcons/Pool.png'
import SolarPanelIcon from '../assets/FroggyOaksIcons/SolarPanel.png'
import ADUIcon from '../assets/FroggyOaksIcons/ADU.png'

import Mound1 from '../assets/MoundImages/Mound1.png'
import Mound2 from '../assets/MoundImages/Mound2.png'
import Mound3 from '../assets/MoundImages/Mound3.png'
import Mound4 from '../assets/MoundImages/Mound4.png'
import Garden1 from '../assets/GardenImages/Garden1.png'
import Garden2 from '../assets/GardenImages/Garden2.png'
import Garden3 from '../assets/GardenImages/Garden3.png'
import Garden4 from '../assets/GardenImages/Garden4.png'
import WaterTower1 from '../assets/WaterTowerImages/WaterTower1.png'
import WaterTower2 from '../assets/WaterTowerImages/WaterTower2.png'
import WaterTower3 from '../assets/WaterTowerImages/WaterTower3.png'
import WaterTower4 from '../assets/WaterTowerImages/WaterTower4.png'
import WindMill1 from '../assets/WindMillImages/WindMill1.png'
import WindMill2 from '../assets/WindMillImages/WindMill2.png'
import WindMill3 from '../assets/WindMillImages/WindMill3.png'
import WindMill4 from '../assets/WindMillImages/WindMill4.png'
import MainHouse1 from '../assets/MainHouseImages/MainHouse1.png'
import MainHouse2 from '../assets/MainHouseImages/MainHouse2.png'
import MainHouse3 from '../assets/MainHouseImages/MainHouse3.png'
import MainHouse4 from '../assets/MainHouseImages/MainHouse4.png'
import Solar1 from '../assets/SolarImages/Solar1.png'
import Solar2 from '../assets/SolarImages/Solar2.png'
import Solar3 from '../assets/SolarImages/Solar3.png'
import Solar4 from '../assets/SolarImages/Solar4.png'
import Pool1 from '../assets/PoolImages/Pool1.png'
import Pool2 from '../assets/PoolImages/Pool2.png'
import Pool3 from '../assets/PoolImages/Pool3.png'
import Pool4 from '../assets/PoolImages/Pool4.png'
import Adu1 from '../assets/AduImages/Adu1.png'
import Adu2 from '../assets/AduImages/Adu2.png'
import Adu3 from '../assets/AduImages/Adu3.png'
import Adu4 from '../assets/AduImages/Adu4.png'




export default class LandingPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			moundVisable: false,
			gardenVisable: false,
			waterVisable: false,
			windVisable: false,
			mainHouseVisable: false,
			poolVisable: false,
			solarVisable: false,
			aduVisable: false
		}
	}

	renderMoundProfileBox() {
			if (this.state.moundVisable) {
				return (
					<div>
						<div className="row" style={styles.exitButton}>
							<div className="col-1 col-sm-1 offset-sm-11 col-md-1 offset-md-11 col-lg-1 offset-lg-11">
								<h1 onClick={this.onClickMap.bind(this)}>x</h1>
							</div>
						</div>
						<ProfileBox
							imgSlide1={Mound1}
							caption1="AdvanTex AX20 Treatment System"
							imgSlide2={Mound2}
							caption2="Low Profile and Environmentlly Friendly"
							imgSlide3={Mound3}
							caption3="Efficient Small Mound"
							imgSlide4={Mound4}
							caption4="Less Intrusive to the Property"
							title="Mound"
							status="complete"
							interest1="Orenco's latest technology AdvanTex AX20, requires very little space to install and reduces the size of your drainfield or mound system."
							interest2="Uses environmetally sustainable treatment of residential wastewater flow."
							redirect="/landscaping_projects"
						/>
					</div>
				)
			}
	}
	onClickMoundProfileBox() {
		this.setState({
			moundVisable: true,
			gardenVisable: false,
			waterVisable: false,
			windVisable: false,
			mainHouseVisable: false,
			poolVisable: false,
			solarVisable: false,
			aduVisable: false
		})
			console.log("clicked mound")
	}
	renderGardenProfileBox() {
			if (this.state.gardenVisable) {
				return (
					<div>
						<div className="row" style={styles.exitButton}>
							<div className="col-1 col-sm-1 offset-sm-11 col-md-1 offset-md-11 col-lg-1 offset-lg-11">
								<h1 onClick={this.onClickMap.bind(this)}>x</h1>
							</div>
						</div>
						<ProfileBox
							imgSlide1={Garden1}
							caption1="Original View of Garden"
							imgSlide2={Garden2}
							caption2="Most of Damage Occured in the Back"
							imgSlide3={Garden3}
							caption3="We've Added and Fixed Garden Beds"
							imgSlide4={Garden4}
							caption4="Current View of Garden"
							title="Garden"
							status="incomplete"
							interest1="One of the first additions to Froggy Oaks, the garden had produced Burbank Plum trees, Bodega Red potatoes and Heirloom tomatoes for nearly 20 years."
							interest2="Future plans include planting a fresh cut flower bed, updating the raised beds structure and rebuilding the gazebo."
							redirect="/landscaping_projects"
						/>
					</div>
				)
			}
	}
	onClickGardenProfileBox() {
		this.setState({
			moundVisable: false,
			gardenVisable: true,
			waterVisable: false,
			windVisable: false,
			mainHouseVisable: false,
			poolVisable: false,
			solarVisable: false,
			aduVisable: false
		})
		console.log("clicked garden")
	}
	renderWaterProfileBox() {
			if (this.state.waterVisable) {
				return (
					<div>
						<div className="row" style={styles.exitButton}>
							<div className="col-1 col-sm-1 offset-sm-11 col-md-1 offset-md-11 col-lg-1 offset-lg-11">
								<h1 onClick={this.onClickMap.bind(this)}>x</h1>
							</div>
						</div>
						<ProfileBox
							imgSlide1={WaterTower1}
							caption1="Original View of Water Tower"
							imgSlide2={WaterTower2}
							caption2="The Fire Completely Disintegrated the Plastic Water Tank"
							imgSlide3={WaterTower3}
							caption3="Upgraded to an Aluminim Water Tank"
							imgSlide4={WaterTower4}
							caption4="Current View of Water Tank"
							title="Water Tower"
							status="complete"
							interest1="The original Water Tower was a plastic water tank decorated with bamboo and was lovingly called Wilson."
							interest2="The new water tank is made from aluminium and starts drawing water from our personal aquifer at 180ft to 220ft."
							redirect="/landscaping_projects"
						/>
					</div>
				)
			}
	}
	onClickWaterProfileBox() {
		this.setState({
			moundVisable: false,
			gardenVisable: false,
			waterVisable: true,
			windVisable: false,
			mainHouseVisable: false,
			poolVisable: false,
			solarVisable: false,
			aduVisable: false
		})
		console.log("clicked water")
	}
	renderWindProfileBox() {
			if (this.state.windVisable) {
				return (
					<div>
						<div className="row" style={styles.exitButton}>
							<div className="col-1 col-sm-1 offset-sm-11 col-md-1 offset-md-11 col-lg-1 offset-lg-11">
								<h1 onClick={this.onClickMap.bind(this)}>x</h1>
							</div>
						</div>
						<ProfileBox
							imgSlide1={WindMill1}
							caption1="Original View of Windmill"
							imgSlide2={WindMill2}
							caption2="Windmill Generator Burned in the Fire"
							imgSlide3={WindMill3}
							caption3="Currently Nonoperational"
							imgSlide4={WindMill4}
							caption4="Current View of WindMill"
							title="Windmill"
							status="broken"
							interest1="At 80ft tall the Windmill can produce renewable engery for Froggy Oaks."
							interest2="Native birds love the Windmill, in fact, they nest in the turbine and frequently perch on the tail."
							redirect="/landscaping_projects"
						/>
					</div>
				)
			}
	}
	onClickWindProfileBox() {
		this.setState({
			moundVisable: false,
			gardenVisable: false,
			waterVisable: false,
			windVisable: true,
			mainHouseVisable: false,
			poolVisable: false,
			solarVisable: false,
			aduVisable: false
		})
		console.log("clicked wind")
	}
	renderMainHouseProfileBox() {
			if (this.state.mainHouseVisable) {
				return (
					<div>
						<div className="row" style={styles.exitButton}>
							<div className="col-1 col-sm-1 offset-sm-11 col-md-1 offset-md-11 col-lg-1 offset-lg-11">
								<h1 onClick={this.onClickMap.bind(this)}>x</h1>
							</div>
						</div>
						<ProfileBox
							imgSlide1={MainHouse1}
							caption1="Original View of Main House"
							imgSlide2={MainHouse2}
							caption2="The Day After the Fire"
							imgSlide3={MainHouse3}
							caption3="After Debris had been Removed"
							imgSlide4={MainHouse4}
							caption4="Current View of Main House"
							title="Main House"
							status="broken"
							interest1="Built in 1979, the original Main House incorporated the naturally beautiful environment through floor to cieling windows."
							interest2="Instead of recreating the original house, a Tahoe inspired cabin, we will be building a modern farmhouse."
							redirect="/main_house_projects"
						/>
					</div>
				)
			}
	}
	onClickMainHouseProfileBox() {
		this.setState({
			moundVisable: false,
			gardenVisable: false,
			waterVisable: false,
			windVisable: false,
			mainHouseVisable: true,
			poolVisable: false,
			solarVisable: false,
			aduVisable: false
		})
		console.log("clicked house")
	}
	renderPoolProfileBox() {
			if (this.state.poolVisable) {
				return (
					<div>
						<div className="row" style={styles.exitButton}>
							<div className="col-1 col-sm-1 offset-sm-11 col-md-1 offset-md-11 col-lg-1 offset-lg-11">
								<h1 onClick={this.onClickMap.bind(this)}>x</h1>
							</div>
						</div>
						<ProfileBox
							imgSlide1={Pool1}
							caption1="Original View of Pool"
							imgSlide2={Pool2}
							caption2="All Decking and Foliage Competely Burned"
							imgSlide3={Pool3}
							caption3="Started from the Bottom"
							imgSlide4={Pool4}
							caption4="Current View of Pool"
							title="Pool"
							status="incomplete"
							interest1="Originally the pool used chlorine; the new pool will use salt water."
							interest2="New additions to the pool area include a walk-in wading pool and hot tub."
							redirect="/pool_projects"
						/>
					</div>
				)
			}
	}
	onClickPoolProfileBox() {
		this.setState({
			moundVisable: false,
			gardenVisable: false,
			waterVisable: false,
			windVisable: false,
			mainHouseVisable: false,
			poolVisable: true,
			solarVisable: false,
			aduVisable: false
		})
		console.log("clicked pool")
	}
	renderSolarProfileBox() {
			if (this.state.solarVisable) {
				return (
					<div>
						<div className="row" style={styles.exitButton}>
							<div className="col-1 col-sm-1 offset-sm-11 col-md-1 offset-md-11 col-lg-1 offset-lg-11">
								<h1 onClick={this.onClickMap.bind(this)}>x</h1>
							</div>
						</div>
						<ProfileBox
							imgSlide1={Solar1}
							caption1="Creating the Solar Foundation"
							imgSlide2={Solar2}
							caption2="Ready for the Solar Pannels"
							imgSlide3={Solar3}
							caption3="After Compeletion of Solar Array"
							imgSlide4={Solar4}
							caption4="Current View of Solar Array"
							title="Solar Array"
							status="complete"
							interest1="The orignal solar pannels were for heating the pool, however, the new solar array creates over 100% of the engery we use, making us completely self-sufficient."
							interest2="Froggy Oaks' first completed project."
							redirect="/landscaping_projects"
						/>
					</div>
				)
			}
	}
	onClickSolarProfileBox() {
		this.setState({
			moundVisable: false,
			gardenVisable: false,
			waterVisable: false,
			windVisable: false,
			mainHouseVisable: false,
			poolVisable: false,
			solarVisable: true,
			aduVisable: false
		})
		console.log("clicked solar")
	}
	renderAduProfileBox() {
			if (this.state.aduVisable) {
				return (
					<div>
						<div className="row" style={styles.exitButton}>
							<div className="col-1 col-sm-1 offset-sm-11 col-md-1 offset-md-11 col-lg-1 offset-lg-11">
								<h1 onClick={this.onClickMap.bind(this)}>x</h1>
							</div>
						</div>
						<ProfileBox
							imgSlide1={Adu1}
							caption1="Orignal View of The Coop'"
							imgSlide2={Adu2}
							caption2="Creating the Foundation"
							imgSlide3={Adu3}
							caption3="The Basic Structure"
							imgSlide4={Adu4}
							caption="Current View of The Coop'"
							title="The Coop'"
							status="incomplete"
							interest1="Before the Accessory Dwelling Unit there was a chicken coop with chickens."
							interest2="First it was simply called the ADU, which evolved into the Gnome Home, but it is now refered to as The Coop'."
							redirect="/adu_home_projects"
						/>
					</div>
				)
			}
	}
	onClickAduProfileBox() {
		this.setState({
			moundVisable: false,
			gardenVisable: false,
			waterVisable: false,
			windVisable: false,
			mainHouseVisable: false,
			poolVisable: false,
			solarVisable: false,
			aduVisable: true
		})
		console.log("clicked adu")
	}
	onClickMap() {
		this.setState({
			moundVisable: false,
			gardenVisable: false,
			waterVisable: false,
			windVisable: false,
			mainHouseVisable: false,
			poolVisable: false,
			solarVisable: false,
			aduVisable: false
		})
	}

	render() {
		return (
      <div>
        <div className="row" style={styles.MapTitle}>
          <div className="col-3 col-sm-3 offset-sm-2 col-md-3 offset-md-2 col-lg-3 offset-lg-2">
						  <h2>Sonoma County</h2>
				  </div>
					<div className="col-2 col-sm-2 col-md-2 col-lg-2">
						<img src={Compass} style={styles.MapCompass}/>
					</div>
					<div className="col-3 col-sm-3 col-md-3 col-lg-3">
							<h2>Rebuilding Map</h2>
					</div>
        </div>

				<div className="row" style={styles.MapBackground}>
					<div className="col-12 col-sm-12 col-md-12 col-lg-12">
						<div style={styles.DummyRow}></div>
						<div className="row" style={styles.MapRow}>
							<div className="col-sm-3 col-md-3 col-lg-3" onClick={this.onClickMoundProfileBox.bind(this)}>
								<div className="row">
									<div className="col-8 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
									<StatusBox
									imgSrc={MoundIcon}
									title="Mound"
									status="Complete"
									style={styles.complete}
									/>
									</div>
								</div>
							</div>
							<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" onClick={this.onClickGardenProfileBox.bind(this)}>
								<div className="row">
									<div className="col-sm-10 col-md-10 col-lg-10">
									<StatusBox
									imgSrc={GardenIcon}
									title="Garden"
									status="Incomplete"
									style={styles.partial}
									/>
									</div>
								</div>
							</div>
							<div className="col-sm-3 col-md-3 col-lg-3" onClick={this.onClickWaterProfileBox.bind(this)}>
								<div className="row">
									<div className="col-6 col-sm-6 offset-sm-2 col-md-6 offset-md-2 col-lg-6 offset-lg-2">
									<StatusBox
									imgSrc={WaterTowerIcon}
									title="Water Tower"
									status="Complete"
									style={styles.complete}
									/>
									</div>
								</div>
							</div>
						</div>
						<div className="row" style={styles.MapRow}>
							<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" onClick={this.onClickWindProfileBox.bind(this)}>
								<div className="row">
									<div className="col-6 col-sm-6 col-md-6 col-lg-6">
									<StatusBox
									imgSrc={WindMillIcon}
									title="Wind Mill"
									status="Incomplete"
									style={styles.broken}
									/>
									</div>
								</div>
							</div>
							<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" onClick={this.onClickMainHouseProfileBox.bind(this)}>
								<div className="row">
									<div className="col-12 col-sm-12 col-md-12 col-lg-12">
										<StatusBox
											imgSrc={MainHouseIcon}
											title="Main House"
											status="Incomplete"
											style={styles.broken}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="row" style={styles.MapRow}>
							<div className="col-sm-3 offset-sm-6 col-md-3 offset-md-6 col-lg-3 offset-lg-6" onClick={this.onClickPoolProfileBox.bind(this)}>
								<div className="row">
									<div className="col-10 col-sm-10 col-md-10 col-lg-10">
										<StatusBox
										imgSrc={PoolIcon}
										title="Pool"
										status="Incomplete"
										style={styles.partial}
										/>
									</div>
								</div>
							</div>
							<div className="col-sm-3 col-md-3 col-lg-3" onClick={this.onClickSolarProfileBox.bind(this)}>
								<div className="row">
									<div className="col-7 col-sm-7 col-md-7 col-lg-7">
										<StatusBox
										imgSrc={SolarPanelIcon}
										title="Solar Array"
										status="Incomplete"
										style={styles.complete}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="row" style={styles.MapRow}>
							<div className="col-sm-3 offset-sm-2 col-md-3 offset-md-2 col-lg-3 offset-lg-2" onClick={this.onClickAduProfileBox.bind(this)}>
								<div className="row">
									<div className="col-7 col-sm-7 col-md-7 col-lg-7">
									<StatusBox
										imgSrc={ADUIcon}
										title="The Coop'"
										status="Incomplete"
										style={styles.partial}
									/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-6 offset-lg-3" style={styles.box}>
						{this.renderMoundProfileBox()}
						{this.renderGardenProfileBox()}
						{this.renderWaterProfileBox()}
						{this.renderWindProfileBox()}
						{this.renderMainHouseProfileBox()}
						{this.renderPoolProfileBox()}
						{this.renderSolarProfileBox()}
						{this.renderAduProfileBox()}
					</div>
				</div>
			</div>

		)
	}
}
const styles = {
	MapTitle: {
		textAlign:"center",
		marginTop: "2%",
		padding: "2%",
		color: "#1F363D",
		fontFamily: "Courier",
		position: "relative"
	},
	MapCompass: {
		width: "60px",
		transform: "rotate(315deg)",
	},
	MapBackground: {
		backgroundImage: "url("+ BackgroundMap +")",
		backgroundSize: "100% 100%",
		textAlign: "center",
		margin: "0% 5% 5% 5%",
		position: "absolute",
		border: "1px solid #1F363D"
	},
	DummyRow: {
		height: "150px",
	},
	MapRow: {
		height: "250px"
	},
  complete: {
    boxShadow: "0px 0px 0px 5px #294936",
    borderRadius: "50%",
			padding: "5%"
  },
  partial: {
    boxShadow: "0px 0px 0px 5px #F19953",
    borderRadius: "50%",
		padding: "5%"
  },
  broken: {
    boxShadow: "0px 0px 0px 5px #A52422",
    borderRadius: "50%",
		padding: "5%"
  },
	exitButton: {
		fontFamily: "Mellony",
	},
	box: {
		marginTop: "2%"
	}
}
