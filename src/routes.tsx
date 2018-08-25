import * as React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPageComponent from "src/ui/landing-page/landing.page.component";

export class Routes {
	static getRoutes(location: any): JSX.Element {
		return (
			<Switch>
				{/* Default route will be used in case if nothing matches */}
				<Route render={({location}) => <LandingPageComponent location={location} />} />
			</Switch>
		);
	}
}
