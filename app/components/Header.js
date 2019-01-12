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
          <Link to="/" style={styles.HeaderTitle}><h1>Rebuidling Froggy Oaks</h1></Link>
        </div>
				<div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
					<Link to="/ourstory" style={styles.LinkTitle}>Our Story</Link>
				</div>
				<div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
					<Link to="/blog" style={styles.LinkTitle}>Rebuilding Blog</Link>
				</div>
				<div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
					<Link to="/" style={styles.LinkTitle}>Map</Link>
				</div>
			</div>
		)
	}
}

const styles = {
	HeaderBackground: {
		padding: "2%",
		fontFamily: "CountrySide",
	},
	HeaderBox: {
		padding: "0% 0% 0% 4%"
	},
	HeaderTitle: {
		textDecoration: "none",
		color: "green"
	},
	LinkBackground: {
		marginTop: "1%",
		textAlign: "center"
	},
	LinkTitle: {
		color: "black"

	}
}
