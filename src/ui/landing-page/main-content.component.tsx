import * as React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';

import MyProjectsComponent from '../my-projects/my-projects.component';
import MyContactsComponent from '../my-contacts/my-contacts.component';
import MeComponent from '../me/me.component';

interface IComponentProps {
	location: any;
}

interface IComponentState { }

export default class MainContentComponent extends React.Component<IComponentProps, IComponentState> {
	constructor(props: IComponentProps) {
		super(props);
		this.state = {};
	}

	render() {
		const location = this.props.location.pathname;
		return (
			<div id="content">
				<div className="navbar row">
					<div className="logo"></div>
				</div>
				<div className="content-container">
					<section className="menu-container">
						<Link
							className={"animated-button small diagonal-sliding "
								+ (location === "/me" && "selected")}
							to={"/me"}>
							Me
						</Link>
						<Link
							className={"animated-button small diagonal-sliding "
								+ (location === "/my-projects" && "selected")}
							to={"/my-projects"}>
							My projects
						</Link>
						<Link
							className={"animated-button small diagonal-sliding "
								+ (location === "/my-contacts" && "selected")}
							to={"/my-contacts"}>
							My contacts
						</Link>
					</section>
					<section className="main-content-container">
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
									<Route component={MeComponent}/>
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					</section>
				</div>
			</div>
		);
	}
}