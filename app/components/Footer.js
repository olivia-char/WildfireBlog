import React, { Component } from 'react';

export default class Footer extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row">
				<div className="col-6 col-sm-6 col-md-6 col-lg-6">
					<p>Last Updated on February 19, 2019</p>
				</div>
			</div>

		)
	}
}
