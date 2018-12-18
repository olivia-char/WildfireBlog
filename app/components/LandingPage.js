import React, { Component } from 'react';
import ProfileBox from './ProfileBox'
import ProjectBox from './ProjectBox'
import BackgroundImg from '../assets/rock.jpg'
import BasicIcon from '../assets/airbnb.png'
export default class LandingPage extends Component {
	constructor(props){
		super(props)
		this.state = {
			isVisable: true,
			isClicked: false,
			isClosed: false
		}
	}
	renderProjectBox() {
		if(this.state.isVisable) {
			return (
				<div>
					<ProjectBox />
				</div>
			)
		}
	}
	statusBoxClick() {
		this.setState({
			isClicked: true,
			isVisable:false
		})
		console.log("i've been clicked")
	}
	renderProfileBox() {
		if(this.state.isClicked === true) {
			return(
				<div>
					<ProfileBox />
    		</div>
			)
		}
	}
	renderProfileBoxOff() {
		if(this.state.isClicked) {
			return (
				<div>
					<h3 onClick={this.profileBoxOff.bind(this)}>X</h3>
				</div>
			)
		}
			console.log("close button clicked")
	}
	profileBoxOff() {
		this.setState({
			isClicked: false,
			isVisable: true
		})
	}

	render() {
		return (
      <div style={styles.background}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
						  <h3>Rebuilding Progress Map</h3>
          </div>
        </div>

        <div className="row">

          <div onClick={this.statusBoxClick.bind(this)} className="col-sm-2 offset-sm-8 col-md-2 offset-md-8 col-lg-2 offset-lg-8">
						{this.renderProjectBox() &&
							<ProjectBox
								imgSrc={BasicIcon}
								title="ADU"
								style={styles.partial}
							/>
						}
          </div>
					<div className="col-sm-4 offset-sm-8 col-md-4 offset-md-8 col-lg-4 offset-lg-8">
						{this.renderProfileBoxOff()}
						{this.renderProfileBox() &&
							<ProfileBox
								title="The Coop' or Gnome Home - still in debate"
								status="Incomplete"
								highlights="Project Highlights"
								interest="click here for more info"
								redirect="/adu"
							/>

						}
					</div>

				</div>


        <div className="row">

				  <div className="col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1">
            <ProjectBox
            imgSrc={BasicIcon}
            title="SOLAR"
            link="http://www.google.com"
            style={styles.complete}
						/>
          </div>

          <div className="col-sm-2 col-md-2 col-lg-2" >
            <ProjectBox
            imgSrc={BasicIcon}
            title="POOL"
            link="http://www.google.com"
            style={styles.partial}
            />
          </div>

        </div>

        <div className="row">
          <div onClick={this.statusBoxClick.bind(this)} className="col-sm-2 offset-sm-5 col-md-2 offset-md-5 col-lg-2 offset-lg-5" >
						{this.renderProjectBox() &&
							<ProjectBox
							imgSrc={BasicIcon}
							title="HOUSE"
							link="http://www.google.com"
							style={styles.broken}
							/>
						}
          </div>
					<div className="col-sm-4 offset-sm-8 col-md-4 offset-md-8 col-lg-4 offset-lg-8">
						{this.renderProfileBoxOff()}
						{this.renderProfileBox() &&
							<ProfileBox
								title="The Coop' or Gnome Home - still in debate"
								status="Incomplete"
								highlights="Project Highlights"
								interest="click here for more info"
								redirect="/adu"
							/>

						}
					</div>
        </div>

        <div className="row">
          <div className="col-sm-2 offset-sm-8 col-md-2 offset-md-8 col-lg-2 offset-lg-8">
            <ProjectBox
            imgSrc={BasicIcon}
            title="WIND"
            link="http://www.google.com"
            style={styles.broken}
            />

          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 offset-sm-2 col-md-2 offset-md-2 col-lg-2 offset-lg-2">
            <ProjectBox
            imgSrc={BasicIcon}
            title="WATER"
            link="http://www.google.com"
            style={styles.complete}
            />

          </div>
          <div className="col-sm-2 offset-sm-2 col-md-2 offset-md-2 col-lg-2 offset-lg-2">
            <ProjectBox
            imgSrc={BasicIcon}
            title="GARDEN"
            link="http://www.google.com"
            style={styles.partial}
						info="french style garden, need to fix permiter and build pagoda."
            />

          </div>
          <div className="col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1" >
            <ProjectBox
            imgSrc={BasicIcon}
            title="MOUND"
            link="http://www.google.com"
            style={styles.broken}
						info="this is a new type of tank with a smaller mound"
            />

          </div>
        </div>
      </div>
		)
	}
}
const styles = {
  background: {
    backgroundColor: "lightGreen"
  },
  complete: {
    boxShadow: "0px 0px 0px 2px green",
    borderRadius: "50%",
    textAlign:"center",
  },
  partial: {
    boxShadow: "0px 0px 0px 2px orange",
    borderRadius: "50%",
    textAlign:"center",
  },
  broken: {
    boxShadow: "0px 0px 0px 2px red",
    borderRadius: "50%",
    textAlign:"center",
  }
}
