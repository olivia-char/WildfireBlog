import React, { Component } from 'react';

import ProjectBox from './ProjectBox'

import BasicIcon from '../assets/airbnb.png'
import Compass from '../assets/compass.png'

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

        <div className="row">
          <div className="col-sm-3 offset-sm-8 col-md-3 offset-md-8 col-lg-3 offset-lg-8">
						<ProjectBox
							imgSrc={BasicIcon}
							title="ADU"
							status="Incomplete"
							interest="Pitched Roof"
							redirect="/adu"
							style={styles.partial}
						/>
        	</div>

					<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
            <ProjectBox
            imgSrc={BasicIcon}
            title="SOLAR"
            redirect="/pool"
            style={styles.complete}
						/>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3" >
            <ProjectBox
            imgSrc={BasicIcon}
            title="POOL"
            redirect="/pool"
            style={styles.partial}
            />
          </div>
					<div className="col-sm-3 offset-sm-5 col-md-3 offset-md-5 col-lg-3 offset-lg-5" >
						<ProjectBox
							imgSrc={BasicIcon}
							title="HOUSE"
							redirect="/mainhouse"
							style={styles.broken}
						/>
          </div>
					<div className="col-sm-3 offset-sm-8 col-md-3 offset-md-8 col-lg-3 offset-lg-8">
            <ProjectBox
            imgSrc={BasicIcon}
            title="WIND"
            redirect="/landscaping"
            style={styles.broken}
            />
          </div>
					<div className="col-sm-3 offset-sm-2 col-md-3 offset-md-2 col-lg-3 offset-lg-2">
            <ProjectBox
            imgSrc={BasicIcon}
            title="WATER"
            redirect="/landscaping"
            style={styles.complete}
            />
          </div>
          <div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1">
            <ProjectBox
            imgSrc={BasicIcon}
            title="GARDEN"
            redirect="/landscaping"
            style={styles.partial}
						info="french style garden, need to fix permiter and build pagoda."
            />
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3" >
            <ProjectBox
            imgSrc={BasicIcon}
            title="MOUND"
            redirect="/landscaping"
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
    backgroundColor: "lightGreen",
		padding: "3% 0% 5% 0%",
  },
	MapTitle: {
		textAlign:"center",
		paddingBottom: "3%",
		fontFamily: "courier"
	},
	MapCompass: {
		width: "60px",
		transform: "rotate(45deg)",
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
  },

}
