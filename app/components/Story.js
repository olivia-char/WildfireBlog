import React, { Component } from 'react';

export default class Story extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
        <h1>this is our story of the fires</h1>
			</div>
		)
	}
}

const styles = {
  Blog: {
    backgroundColor: "purple"
  }
}
