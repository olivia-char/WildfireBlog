import React, { Component } from 'react';

export default class BlogBox extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.BlogBox}>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <h1>{this.props.title}</h1>
          <h3>{this.props.tagline}</h3>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <img src={this.props.imgSrc} style={styles.imgStyle}/>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-8">
          <p>{this.props.body}</p>
        </div>
			</div>
		)
	}
}

const styles = {
  BlogBox: {
    backgroundColor:"purple",
    margin: "5%"
  },
  imgStyle: {
    width:"50%",
    marginBottom:"5%",
  },
}
