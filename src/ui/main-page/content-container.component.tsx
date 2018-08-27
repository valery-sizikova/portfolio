import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import MyProjectsComponent from '../my-projects/my-projects.component';
import MyContactsComponent from '../my-contacts/my-contacts.component';
import MeComponent from '../me/me.component';

interface IComponentProps {
	location: any;
}

export default class ContentContainerComponent extends React.Component<IComponentProps, {}> {
	render() {
		return (
			<section className="content-container">
				<TransitionGroup>
					<CSSTransition
						key={this.props.location.key}
						classNames="fade"
						timeout={800}
					>
						<Switch>
							<Route
								exact
								path={"/me"}
								component={MeComponent}
							/>
							<Route
								exact
								path={"/my-projects"}
								component={MyProjectsComponent}
							/>
							<Route
								exact
								path={"/my-contacts"}
								component={MyContactsComponent}
							/>
							<Route component={MeComponent} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</section>
		);
	}
}