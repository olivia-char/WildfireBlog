import React, { Component } from 'react';

export default class Defense extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
        <h1>this is the defense thingies</h1>
			</div>
		)
	}
}

const styles = {
  Blog: {
    backgroundColor: "blue"
  }
}
