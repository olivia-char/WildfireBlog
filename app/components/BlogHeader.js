import React, { Component } from 'react';
import Vine from '../assets/vineyard.jpg'
import { Link } from 'react-router-dom';

export default class Story extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
      <div className="row" style={styles.HeaderBackground}>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
          <Link to="#/gnome_home_projects" style={styles.LinkTitle}>Gnome Home Projects</Link>
        </div>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
          <Link to="#/main_house_projects" style={styles.LinkTitle}>Main House Projects</Link>
        </div>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
          <Link to="#/pool_projects" style={styles.LinkTitle}>Pool Projects</Link>
        </div>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
          <Link to="#/landscaping_projects" style={styles.LinkTitle}>Landscaping Projects</Link>
        </div>
      </div>
		)
	}
}

const styles = {
	HeaderBackground: {
		padding: "2%",
		fontFamily: "Mellony",
		borderBottom: "1px solid green"
	},
	LinkBackground: {
		marginTop: "1%",
		textAlign: "center"
	},
	LinkTitle: {
		color: "black"

	}
}
