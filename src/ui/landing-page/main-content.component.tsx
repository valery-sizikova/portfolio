import * as React from 'react';
import MyProjectsComponent from '../my-projects/my-projects.component';
import MyContactsComponent from '../my-contacts/my-contacts.component';
import MeComponent from '../me/me.component';
import { Link } from 'react-router-dom';
import { Routes } from '../../routes';

interface IComponentProps {
	section: "my-projects" | "my-contacts" | undefined;
}

interface IComponentState { }

export default class MainContentComponent extends React.Component<IComponentProps, IComponentState> {
	constructor(props: IComponentProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div id="content">
				<div className="navbar row">
					<div className="logo"></div>
				</div>
				<div className="content-container">
					<section className="menu-container">
						<Link className="animated-button small diagonal-sliding" to={Routes.main.build({
							section: undefined
						})}>
							Me
						</Link>
						<Link className="animated-button small diagonal-sliding" to={Routes.main.build({
							section: "my-projects"
						})}>
							My projects
						</Link>
						<Link className="animated-button small diagonal-sliding" to={Routes.main.build({
							section: "my-contacts"
						})}>
							My contacts
						</Link>
					</section>
					<section className="main-content-container">
						{this.props.section === "my-contacts" && <MyContactsComponent />}
						{this.props.section === "my-projects" && <MyProjectsComponent />}
						{this.props.section === undefined && <MeComponent />}
					</section>
				</div>
			</div>
		);
	}
}