import * as React from 'react';
import CoverImageComponent from './cover-image.component';
import MainContentComponent from './main-content.component';

interface IComponentProps {
	location: any;
}

interface IComponentState { }

export default class LandingPageComponent extends React.Component<IComponentProps, IComponentState> {
	render() {
		return (
			<div className="landing-page">
				<MainContentComponent
					location={this.props.location}
				/>
				<CoverImageComponent
					location={this.props.location}
					contentElementId="content"
				/>
			</div>
		);
	}
}