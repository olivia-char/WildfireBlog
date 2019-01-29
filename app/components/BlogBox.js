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
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
					<h1 style={styles.BlogBoxTitle}>{this.props.title}</h1>
        </div>
				<div className="col-10 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
					  <h4>{this.props.tagline}</h4>
				</div>
        <div className="col-4 col-sm-4 offset-sm-4 col-md-4 offset-md-4 col-lg-4 col-lg-4">
          <img src={this.props.imgSrc} style={styles.imgStyle}/>
        </div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-12" onClick={this.openBlogPost.bind(this)}>
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
    backgroundColor:"#6F9283",
		border: "1px solid #6D9F71",
    margin: "5%",
		fontFamily:"Courier",
		padding: "3%",
		textAlign:"center",
  },
	BlogBoxTitle: {
		fontFamily:"Mellony",
		padding: "4% 0% 4% 0%",
		color: "#E8E9F3"
	},
	BlogPost: {
		textAlign: "left",
		marginTop: "5%"
	},
  imgStyle: {
    width:"100%",
    margin:"10% 0% 5% 0%",
  },
	Blog_Button: {
		fontFamily: "Mellony",
		textAlign: "center",
		marginTop: "2%",
	}
}
