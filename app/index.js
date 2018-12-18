import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch, Link } from 'react-router-dom'

import App from './components/App';
import LandingPage from './components/LandingPage';
import Blog from './components/Blog';
import Story from './components/Story';

import AduProjects from './components/AduProjects'
import MainHouseProjects from './components/MainHouseProjects'
import PoolProjects from './components/PoolProjects'
import LandscapingProjects from './components/LandscapingProjects'
import './main.css';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

const routes = (
	<div>
		<Route component={App} />
		<Switch>
			 <Route exact path="/" component={LandingPage} />
			 <Route path="/blog" component={Blog} />
			 <Route path="/ourstory" component={Story} />
			 <Route path="/adu" component={AduProjects} />
			 <Route path="/mainhouse" component={MainHouseProjects} />
			 <Route path="/pool" component={PoolProjects} />
			 <Route path="/landscaping" component={LandscapingProjects} />
	 </Switch>
 </div>

)

ReactDom.render(
	<Router history={browserHistory}>
		{routes}
	</Router>,
	document.getElementById('app')
)
