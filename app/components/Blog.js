import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AduProjects from './AduProjects.js'
import MainHouseProjects from './MainHouseProjects.js'
import LandscapingProjects from './LandscapingProjects.js'
import PoolProjects from './PoolProjects.js'

export default class Blog extends Component {
	constructor(props){
		super(props);
		this.state = {
			introBoxVisable: true,
			aduProjectsVisable: false,
			landscapingProjectsVisable: false,
			mainHouseProjectsVisable: false,
			poolProjectsVisable: false
		}
	}
		introBoxClick() {
			this.state = {
				introBoxVisable: true,
				aduProjectsVisable: false,
				landscapingProjectsVisable: false,
				mainHouseProjectsVisable: false,
				poolProjectsVisable: false
			}
		}
		renderIntroBox() {
			if(this.state.introBoxVisable === true) {
				return(
					<div>
						<h2>Froggy Oaks Projects</h2>
						<h2>. . .</h2>
					</div>
				)
			}
		}
		aduBoxClick() {
			this.setState({
				introBoxVisable: false,
				aduProjectsVisable: true,
				landscapingProjectsVisable: false,
				mainHouseProjectsVisable: false,
				poolProjectsVisable: false
			})
		}
		renderAduProjects() {
			if(this.state.aduProjectsVisable === true) {
				return(
					<AduProjects />
				)
			}
		}
		mainHouseBoxClick(){
			this.setState({
				introBoxVisable: false,
				aduProjectsVisable: false,
				landscapingProjectsVisable: false,
				mainHouseProjectsVisable: true,
				poolProjectsVisable: false
			})
		}
		renderMainHouseProjects() {
			if(this.state.mainHouseProjectsVisable === true) {
				return(
					<MainHouseProjects />
				)
			}
		}
		poolBoxClick() {
			this.setState({
				introBoxVisable: false,
				aduProjectsVisable: false,
				landscapingProjectsVisable: false,
				mainHouseProjectsVisable: false,
				poolProjectsVisable: true
			})
		}
		renderPoolProjects() {
			if(this.state.poolProjectsVisable === true) {
				return(
					<PoolProjects />
				)
			}
		}
		landscapingBoxClick() {
			this.setState({
				introBoxVisable: false,
				aduProjectsVisable: false,
				landscapingProjectsVisable: true,
				mainHouseProjectsVisable: false,
				poolProjectsVisable: false
			})
		}
		renderLandscapingProjects() {
			if(this.state.landscapingProjectsVisable === true) {
				return(
					<LandscapingProjects />
				)
			}
		}
	render() {
		return (
			<div className="row" style={styles.Blog}>
				<div className="col-sm-3 col-md-3 col-lg-3" style={styles.BlogLinkStyle} onClick={this.aduBoxClick.bind(this)}>
					<h4>Click Here For More Adu Projects</h4>
				</div>
				<div className="col-sm-3 col-md-3 col-lg-3" style={styles.BlogLinkStyle} onClick={this.mainHouseBoxClick.bind(this)}>
					<h4>Click Here For More Main House Projects</h4>
				</div>
				<div className="col-sm-3 col-md-3 col-lg-3"  style={styles.BlogLinkStyle} onClick={this.poolBoxClick.bind(this)}>
					<h4>Click Here For More Pool Projects</h4>
				</div>
				<div className="col-sm-3 col-md-3 col-lg-3" style={styles.BlogLinkStyle} onClick={this.landscapingBoxClick.bind(this)}>
					<h4>Click Here For More Landscaping Projects</h4>
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12">
					{this.renderAduProjects()}
					{this.renderMainHouseProjects()}
					{this.renderPoolProjects()}
					{this.renderLandscapingProjects()}
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.IntroStyle}>
					{this.renderIntroBox()}
				</div>
			</div>
		)
	}
}

const styles = {
  Blog: {

  },
	BlogLinkStyle: {
		textAlign: "center",
		backgroundColor: "green",
		border: "2px solid white",
		padding: "2% 0% 2% 0%"
	},
	IntroStyle: {
		textAlign: "center",
		padding: "2%",
		fontFamily: "Courier"
	}
}
