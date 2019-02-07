import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js'
import StatusBox from './StatusBox.js'
import ProfileBox from './ProfileBox.js'

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


import Mound3 from '../assets/MoundImages/Mound3.png'
import Garden1 from '../assets/GardenImages/Garden1.png'
import Garden2 from '../assets/GardenImages/Garden2.png'
import Garden3 from '../assets/GardenImages/Garden3.png'
import WaterTower1 from '../assets/WaterTowerImages/WaterTower1.png'
import WaterTower2 from '../assets/WaterTowerImages/WaterTower2.png'
import WaterTower3 from '../assets/WaterTowerImages/WaterTower3.png'
import WaterTower4 from '../assets/WaterTowerImages/WaterTower4.png'
import WindMill1 from '../assets/WindMillImages/WindMill1.png'
import WindMill2 from '../assets/WindMillImages/WindMill2.png'
import MainHouse1 from '../assets/MainHouseImages/MainHouse1.png'
import MainHouse2 from '../assets/MainHouseImages/MainHouse2.png'
import MainHouse3 from '../assets/MainHouseImages/MainHouse3.png'
import MainHouse4 from '../assets/MainHouseImages/MainHouse4.png'
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
							<div className="col-1 col-sm-1 col-md-1 col-lg-1 ">
								<h1 onClick={this.onClickMap.bind(this)}>x</h1>
							</div>
						</div>
						<ProfileBox
							imgSlide1={Mound3}
							title="Mound"
							status="complete"
							interest="blah blah balh"
							redirect="/rebuilding_blog"
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
							<div className="col-1 col-sm-1 col-md-1 col-lg-1 ">
								<h1 onClick={this.onClickMap.bind(this)}>x</h1>
							</div>
						</div>
						<ProfileBox
							imgSlide1={Garden1}
							imgSlide2={Garden2}
							imgSlide3={Garden3}
							title="Garden"
							status="incomplete"
							interest="blah blah balh blahclskfjslkdfjs fksdlhfls fdksfj"
							redirect="/rebuilding_blog"
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
							<div className="col-1 col-sm-1 col-md-1 col-lg-1 ">
								<h1 onClick={this.onClickMap.bind(this)}>x</h1>
							</div>
						</div>
						<ProfileBox
							imgSlide1={WaterTower1}
							imgSlide2={WaterTower2}
							imgSlide3={WaterTower3}
							imgSlide4={WaterTower4}
							title="Water"
							status="complete"
							interest="Wilson was the original name for the water tower. A new name has not been chosen yet."
							redirect="/rebuilding_blog"
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
							imgSlide2={WindMill2}
							imgSlide3={WaterTower3}
							imgSlide4={WaterTower4}
							title="Windmill"
							status="broken"
							interest="blah blah balh"
							redirect="/rebuilding_blog"
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
							imgSlide2={MainHouse2}
							imgSlide3={MainHouse3}
							imgSlide4={MainHouse4}
							title="Main House"
							status="broken"
							interest="blah blah balh"
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
							imgSlide2={Pool2}
							imgSlide3={Pool3}
							imgSlide4={Pool4}
							title="Pool"
							status="incomplete"
							interest="blah blah balh"
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
							imgSlide1={Solar2}
							imgSlide2={Solar2}
							imgSlide3={Solar3}
							imgSlide4={Solar4}
							title="Solar Array"
							status="complete"
							interest="blah blah balh"
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
							imgSlide2={Adu2}
							imgSlide3={Adu2}
							imgSlide4={WaterTower4}
							title="The Coop'"
							status="complete"
							interest="blah blah balh"
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
									status="Completed"
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
		backgroundSize: "cover",
		textAlign: "center",
		margin: "0% 5% 5% 5%",
		position: "absolute"
	},
	DummyRow: {
		height: "125px"
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
