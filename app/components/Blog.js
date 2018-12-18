import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blog extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
				<div className="col-sm-12 col-md-12 col-lg-12">
					<h1>this is the blog</h1>
					<h3>this part is all about our rebuilding projects, ideas, concepts and thought process. What worked and what failed.</h3>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-6">
					<Link to="/adu"><h1>Click Here For More Adu Projects</h1></Link>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-6">
					<Link to="/mainhouse"><h1>Click Here For More Main House Projects</h1></Link>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-6">
					<Link to="/pool"><h1>Click Here For More Pool Projects</h1></Link>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-6">
					<Link to="/landscaping"><h1>Click Here For More Landscaping Projects</h1></Link>
				</div>
			</div>
		)
	}
}

const styles = {
  Blog: {
    backgroundColor: "green"
  }
}
