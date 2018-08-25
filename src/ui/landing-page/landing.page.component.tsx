import * as React from 'react';
import CoverImageComponent from './cover-image.component';
import MainContentComponent from './main-content.component';
import { RouteComponentProps } from 'react-router';

export interface ILandingPageParams {
	section: "my-projects" | "my-contacts" | undefined;
}

interface IComponentProps extends RouteComponentProps<ILandingPageParams> { }

interface IComponentState { }

export default class LandingPageComponent extends React.Component<IComponentProps, IComponentState> {
	constructor(props: IComponentProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="landing-page">
				<MainContentComponent
					section={this.props.match.params.section}
				/>
				<CoverImageComponent
					isRendered={this.props.match.params.section === undefined}
					contentElementId="content"
				/>
			</div>
		);
	}
}