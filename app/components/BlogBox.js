import React, { Component } from 'react';

export default class BlogBox extends Component {
	constructor(props){
		super(props)
		this.state = {
			isVisable: false,
			isClicked: false,
			hideButton: false
		}
	}
	renderBlogPost() {
		if(this.state.isVisable === true) {
			return(
				<div>
					<div style={styles.BlogPost}>
					<img src={this.props.imgSrc} style={styles.imgStyle}/>
					<p>{this.props.paraOne}</p>
					<p>{this.props.paraTwo}</p>
					<p>{this.props.paraThree}</p>
					</div>
					<div className="Blog_Button">
						<h5 onClick={this.closeBlogPost.bind(this)}>Read Less</h5>
					</div>

				</div>
			)
		}
	}

	renderButton() {
		if(this.state.hideButton === false) {
			return(
				<div>
					<h5 className="Blog_Button">Read More</h5>
				</div>
			)
		}
	}
	openBlogPost() {
		this.setState({
			isVisable: true,
			hideButton: true
		})
	}
	closeBlogPost() {
		this.setState({
			isVisable: false,
			hideButton: false
		})
	}
	render() {
		return (
			<div className="row" style={styles.BlogBox}>
        <div className="col-8 col-sm-8 col-md-8 col-lg-8 ">
					<h2 style={styles.BlogBoxTitle}>{this.props.title}:</h2>
        </div>
				<div className="col-4 col-sm-4 col-md-4 col-lg-4">
					<h6 style={styles.BlogBoxDate}>{this.props.date}, 2019</h6>
				</div>
				<div className="col-10 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
					  <h5>{this.props.tagline}</h5>
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12" style={styles.blogButton} onClick={this.openBlogPost.bind(this)}>
					{this.renderButton()}
				</div>
        <div className="col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
					{this.renderBlogPost()}
        </div>
			</div>
		)
	}
}

const styles = {
  BlogBox: {
		border: "5px solid #6F9283",
    margin: "5%",
		fontFamily:"Courier",
		padding: "3%",
		textAlign:"center",
		color: "#1F363D"
  },
	BlogBoxTitle: {
		fontFamily:"Mellony",
		padding: "4% 0% 4% 0%",
		textAlign: "left"
	},
	BlogPost: {
		textAlign: "left",
		marginTop: "0%",
	},
	blogButton: {
		textAlign: "center",
		fontFamily: "Mellony",
		marginTop: "2%",
		height: "30px"
	},
  imgStyle: {
    width:"100%",
    marginBottom:"5%",
		border: "1px solid #1F363D"
  },
	Blog_Button: {
		fontFamily: "Mellony",
		textAlign: "center",
		marginTop: "2%",
	},
	BlogBoxDate: {
		textAlign: "right"
	}
}
