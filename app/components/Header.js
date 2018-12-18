import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Header}>
        <div className="co-6 col-sm-6 col-md-6 col-lg-6">
          <Link to="/"><h1>Rebuidling Froggy Oaks</h1></Link>
        </div>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2">
          <Link to="/blog">Rebuilding Blog</Link>
        </div>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2">
          <Link to="/ourstory">Our Story</Link>
        </div>
				<div className="co-2 col-sm-2 col-md-2 col-lg-2">
          <Link to="/">Map</Link>
        </div>
			</div>
		)
	}
}

const styles = {

}
