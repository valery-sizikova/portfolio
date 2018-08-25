import * as React from 'react';

interface IComponentProps { }

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
						<a
							href="#"
							onClick={() => console.log("me")}
							className="animated-button small diagonal-sliding">
							Me
        				</a>
						<a
							href="#"
							onClick={() => console.log("me")}
							className="animated-button small diagonal-sliding">
							My projects
        				</a>
						<a
							href="#"
							onClick={() => console.log("me")}
							className="animated-button small diagonal-sliding">
							My contacts
        				</a>
					</section>
					<section className="main-content-container">
						content
					</section>
				</div>
			</div>
		);
	}
}