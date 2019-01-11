import React, { Component } from 'react';

export default class BlogBox extends Component {
	constructor(props){
		super(props)
		this.state = {
			isVisable: false,
			isClicked: false
		}
	}
	renderBlogPost() {
		if(this.state.isVisable === true) {
			return(
				<div>
					<p>{this.props.paraOne}</p>
					<p>{this.props.paraTwo}</p>
					<p>{this.props.paraThree}</p>
					<p onClick={this.closeBlogPost.bind(this)}>close</p>
				</div>
			)
		}
	}
	openBlogPost() {
		this.setState({
			isVisable: true
		})
	}

	closeBlogPost() {
		this.setState({
			isVisable: false
		})
	}
	render() {
		return (
			<div className="row" style={styles.BlogBox}>
        <div className="col-sm-12 col-md-12 col-lg-12" onClick={this.openBlogPost.bind(this)}>
					<h1>{this.props.title}</h1>
          <h3>{this.props.tagline}</h3>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <img src={this.props.imgSrc} style={styles.imgStyle}/>
        </div>
        <div className="col-sm-10 col-md-10 col-lg-10">
					{this.renderBlogPost()}
        </div>
			</div>
		)
	}
}

const styles = {
  BlogBox: {
    backgroundColor:"grey",
    margin: "5%",
  },
  imgStyle: {
    width:"50%",
    marginBottom:"5%",
  },
}
