import React, { Component } from 'react';

export default class Blog extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
        <h1>this is the blog</h1>
			</div>
		)
	}
}

const styles = {
  Blog: {
    backgroundColor: "green"
  }
}
