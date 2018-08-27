import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import MainPageComponent from './ui/main-page/main.page.component';

import './styles.css';

ReactDOM.render(
	<Router>
		<Switch>
			{/* Default route will be used in case if nothing matches */}
			<Route render={({ location }) => <MainPageComponent location={location} />} />
		</Switch>
	</Router>,
	document.getElementById('root') as HTMLElement
);

registerServiceWorker();
