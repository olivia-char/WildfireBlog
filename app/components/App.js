import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../main.css';

import Header from './Header.js'

export default class App extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div >
				<Header />
				{this.props.children}
			</div>

		)
	}
}
