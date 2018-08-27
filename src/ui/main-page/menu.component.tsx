import * as React from 'react';
import { Link } from 'react-router-dom';

interface IComponentProps {
	location: any;
}

export default class MenuComponent extends React.Component<IComponentProps, {}> {
	render() {
		const location = this.props.location.pathname;
		return (
			<section className="menu">
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
		);
	}
}