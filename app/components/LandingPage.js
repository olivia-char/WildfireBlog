import React, { Component } from 'react';

import ProjectBox from './ProjectBox'
import BackgroundImg from '../assets/rock.jpg'
import BasicIcon from '../assets/airbnb.png'
export default class LandingPage extends Component {
	constructor(props){
		super(props)
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
          <div className="col-sm-2 offset-sm-8 col-md-2 offset-md-8 col-lg-2 offset-lg-8">

							<ProjectBox
								imgSrc={BasicIcon}
								title="ADU"
								status="Incomplete"
								interest="Pitched Roof"
								redirect="/blog"
								style={styles.partial}
							/>

          </div>
				</div>

        <div className="row">

				  <div className="col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1">
            <ProjectBox
            imgSrc={BasicIcon}
            title="SOLAR"
            redirect="/blog"
            style={styles.complete}
						/>
          </div>

          <div className="col-sm-2 col-md-2 col-lg-2" >
            <ProjectBox
            imgSrc={BasicIcon}
            title="POOL"
            redirect="/blog"
            style={styles.partial}

            />
          </div>

        </div>

        <div className="row">
          <div  className="col-sm-2 offset-sm-5 col-md-2 offset-md-5 col-lg-2 offset-lg-5" >
							<ProjectBox
							imgSrc={BasicIcon}
							title="HOUSE"
							redirect="/blog"
							style={styles.broken}
							/>
          </div>

        </div>

        <div className="row">
          <div className="col-sm-2 offset-sm-8 col-md-2 offset-md-8 col-lg-2 offset-lg-8">
            <ProjectBox
            imgSrc={BasicIcon}
            title="WIND"
            redirect="/blog"
            style={styles.broken}
            />

          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 offset-sm-2 col-md-2 offset-md-2 col-lg-2 offset-lg-2">
            <ProjectBox
            imgSrc={BasicIcon}
            title="WATER"
            redirect="/blog"
            style={styles.complete}
            />

          </div>
          <div className="col-sm-2 offset-sm-2 col-md-2 offset-md-2 col-lg-2 offset-lg-2">
            <ProjectBox
            imgSrc={BasicIcon}
            title="GARDEN"
            redirect="/blog"
            style={styles.partial}
						info="french style garden, need to fix permiter and build pagoda."
            />

          </div>
          <div className="col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1" >
            <ProjectBox
            imgSrc={BasicIcon}
            title="MOUND"
            redirect="/blog"
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
