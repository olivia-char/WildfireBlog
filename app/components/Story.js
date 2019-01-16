import React, { Component } from 'react';
import Vine from '../assets/vineyard.jpg'

export default class Story extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="row" style={styles.Blog}>
				<div className="col-6 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-6 offset-lg-3" style={styles.StoryBox}>
					<div className="row">
						<div className="col-12 col-sm-12 col-md-12 col-lg-12">
							<h2>October 2017 - Nuns Canyon Fire</h2>
							<p>It was the night of the annual Glen Ellen Village Fair, the entire family was home. We never expected for the fire to happen, there was never a warning. Blah blha nadlkfjsodifjslfn mlsdkfjsdoijf nsdjfn ksfnlsfn nfsdfnksnf nfsdlfn fnsjdf jsfn nfs fnsf fsn fnsfksf slf sldmfk;aglkj sfs fdklsfm s fjsf sf fsl;as f fijd slslf fjisf snfs,f sfnjsnf sf s fmlsmf sifjsof slfnsnf sidfjsodfjdm fslf smlfmlsf dslfkdfmlsfm  fnnfnfnsfn</p>
							<p>It was the night of the annual Glen Ellen Village Fair, the entire family was home. We never expected for the fire to happen, there was never a warning. Blah blha nadlkfjsodifjslfn mlsdkfjsdoijf nsdjfn ksfnlsfn nfsdfnksnf nfsdlfn fnsjdf jsfn nfs fnsf fsn fnsfksf slf sldmfk;aglkj sfs fdklsfm s fjsf sf fsl;as f fijd slslf fjisf snfs,f sfnjsnf sf s fmlsmf sifjsof slfnsnf sidfjsodfjdm fslf smlfmlsf dslfkdfmlsfm  fnnfnfnsfn</p>
							<p>It was the night of the annual Glen Ellen Village Fair, the entire family was home. We never expected for the fire to happen, there was never a warning. Blah blha nadlkfjsodifjslfn mlsdkfjsdoijf nsdjfn ksfnlsfn nfsdfnksnf nfsdlfn fnsjdf jsfn nfs fnsf fsn fnsfksf slf sldmfk;aglkj sfs fdklsfm s fjsf sf fsl;as f fijd slslf fjisf snfs,f sfnjsnf sf s fmlsmf sifjsof slfnsnf sidfjsodfjdm fslf smlfmlsf dslfkdfmlsfm  fnnfnfnsfn</p>
							<p>Unfortunately the next day we found out that the entire house was gone.</p>
						</div>
						<div className="col-6 col-sm-6 offset-sm-6 col-md-6 offset-md-6 col-lg-6 offset-lg-6" style={styles.FontStyle}>
							<h5>Best Wishes,</h5>
							<h3>Froggy Oaks</h3>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const styles = {
  Blog: {
    backgroundImage: "url(" + Vine + ")",
		backgroundSize: "cover",
		padding: "5%",

  },
	StoryBox: {
		backgroundColor: "white",
		padding: "5%",
		borderRadius: "2%"
	},
	FontStyle: {
		fontFamily: "CountrySide",
		marginBottom: "4%"

	}
}
