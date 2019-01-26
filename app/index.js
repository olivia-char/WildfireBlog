import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { Switch } from 'react-router'

import App from './components/App';
import LandingPage from './components/LandingPage';
import Blog from './components/Blog';
import Story from './components/Story';
import AduProjects from './components/AduProjects';
import MainHouseProjects from './components/MainHouseProjects';
import PoolProjects from './components/PoolProjects';
import LandscapingProjects from './components/LandscapingProjects';

import './main.css';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

const routes = (
	<div>
		<Route component={App} />
		<Switch>
			 <Route exact path="/" component={LandingPage} />
			 <Route path="/rebuilding_blog" component={Blog} />
			 <Route path="/our_story" component={Story} />
			 <Route path="/gnome_home_projects" component={AduProjects} />
			 <Route path="/main_house_projects" component={MainHouseProjects} />
			 <Route path="/pool_projects" component={PoolProjects} />
			 <Route path="/landscaping_projects" component={LandscapingProjects} />
	 </Switch>
 </div>
)


ReactDom.render(
	<Router>
		{routes}
	</Router>,
	document.getElementById('app')
)
