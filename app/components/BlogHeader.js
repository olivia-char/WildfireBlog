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
          <h3><Link to="/gnome_home_projects" replace className="Blog_Link_Title">Gnome Home Projects</Link></h3>
        </div>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
        	<h3><Link to="/main_house_projects" replace className="Blog_Link_Title">Main House Projects</Link></h3>
        </div>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
          <h3><Link to="/pool_projects" replace className="Blog_Link_Title">Pool &amp; Patio Projects</Link></h3>
        </div>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
          <h3><Link to="/landscaping_projects" replace className="Blog_Link_Title">Landscaping Projects</Link></h3>
        </div>
      </div>
		)
	}
}

const styles = {
	HeaderBackground: {
		fontFamily: "Mellony",
		backgroundColor: "#E4E3D3",
		borderBottom:"2px solid #6D9F71",
	},
	LinkBackground: {
		backgroundColor: "#788AA3",
		border: "1px solid #666A86",
		textAlign: "center",
		padding: "5% 2% 5% 2%",
		margin: "3% 1% 3% 6%"
	},

}
