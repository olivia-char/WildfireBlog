import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			isClicked: false,
			isHover: false
		}
	}

	render() {
		return (
			<div className="row" style={styles.HeaderBackground}>
        <div className="co-6 col-sm-6 col-md-6 col-lg-6" style={styles.HeaderBox}>
          <h1><Link to="/" replace style={styles.HeaderTitle}>Rebuidling Froggy Oaks</Link></h1>
        </div>
				<div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
					<h4><Link to="/our_story" replace className="Link_Title">Our Story</Link></h4>
				</div>
				<div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
					<h4><Link to="/rebuilding_blog" replace className="Link_Title">Rebuilding Blog</Link></h4>
				</div>
				<div className="co-2 col-sm-2 col-md-2 col-lg-2" style={styles.LinkBackground}>
					<h4><Link to="/" replace className="Link_Title">Map</Link></h4>
				</div>
			</div>
		)
	}
}

const styles = {
	HeaderBackground: {
		padding: "4% 3% 3% 3%",
		fontFamily: "Mellony",
		borderBottom: "1px solid #558B6E",
		backgroundColor: "#6D9F71",
		marginTop: "2%"
	},
	HeaderBox: {
		padding: "0% 0% 0% 4%"
	},
	HeaderTitle: {
		textDecoration: "none",
		color: "#E8E9F3"
	},
	LinkBackground: {
		marginTop: "1%",
		textAlign: "center"
	},
}
