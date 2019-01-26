import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			isClicked: false
		}
	}
	render() {
		return (
			<div className="row" style={styles.HeaderBackground}>
        <div className="co-6 col-sm-6 col-md-6 col-lg-6" style={styles.HeaderBox}>
          <h1><Link to="/" style={styles.HeaderTitle}>Rebuidling Froggy Oaks</Link></h1>
        </div>
				<div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
					<h4><Link to="/our_story" style={styles.LinkTitle}>Our Story</Link></h4>
				</div>
				<div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
					<h4><Link to="/rebuilding_blog" style={styles.LinkTitle}>Rebuilding Blog</Link></h4>
				</div>
				<div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
					<h4><Link to="/" style={styles.LinkTitle}>Map</Link></h4>
				</div>
			</div>
		)
	}
}

const styles = {
	HeaderBackground: {
		padding: "3%",
		fontFamily: "Mellony",
		borderBottom: "1px solid green",
		backgroundColor: "#82AC9F"
	},
	HeaderBox: {
		padding: "0% 0% 0% 4%"
	},
	HeaderTitle: {
		textDecoration: "none",
		color: "#FCF7F8"
	},
	LinkBackground: {
		marginTop: "1%",
		textAlign: "center"
	},
	LinkTitle: {
		color: "#FCF7F8"

	}
}
