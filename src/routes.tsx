import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { RouteDef } from "src/utils/route-helpers";

import LandingPageComponent from "src/ui/landing-page/landing.page.component";
import AnotherPageComponent from "src/ui/another/another.page.component";

export class Routes {
    static getRoutes(): JSX.Element {
        return (
            <Switch>
                <Route
                    exact
                    path={Routes.another.relativePath}
                    component={AnotherPageComponent}
                />
                {/* Default route will be used in case if nothing matches */}
                <Route component={LandingPageComponent} />
            </Switch>
        );
    }

    static readonly root = new RouteDef({ path: "/" });
    static readonly another = new RouteDef({ path: "/another" });
}
