import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css'

import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Standings from './pages/Standings';
import Group from './pages/Group';
import Knockout from './pages/Knockout';

const root = document.getElementById('root')
ReactDOM.render(
		<Router>
			<Layout>
				<Route exact path="/" component={Standings} />
	      <Route path="/group" component={Group} />
	      <Route path="/knockout" component={Knockout} />
			</Layout>
		</Router>,
	root
);

registerServiceWorker();
