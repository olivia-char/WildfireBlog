import React, { Component } from 'react';

export default class Rebuild extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
        <h1>this is the rebuild projects</h1>
			</div>
		)
	}
}

const styles = {
  Blog: {
    backgroundColor: "purple"
  }
}
