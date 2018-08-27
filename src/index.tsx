import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import LandingPageComponent from './ui/landing-page/landing.page.component';

import './styles.css';

ReactDOM.render(
	<Router>
		<Switch>
			{/* Default route will be used in case if nothing matches */}
			<Route render={({ location }) => <LandingPageComponent location={location} />} />
		</Switch>
	</Router>,
	document.getElementById('root') as HTMLElement
);

registerServiceWorker();
