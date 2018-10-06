import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Header}>
        <div className="co-6 col-sm-6 col-md-6 col-lg-6">
          <h1>Rebuidling Froggy Oaks</h1>
        </div>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2">
          <p>our story blog</p>
        </div>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2">
          <p>how to defend</p>
        </div>
        <div className="co-2 col-sm-2 col-md-2 col-lg-2">
          <p>rebuilding projects</p>
        </div>
			</div>
		)
	}
}

const styles = {
  Header: {
    backgroundColor: "teal"
  }
}
