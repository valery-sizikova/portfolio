import * as React from 'react';

import LogoComponent from './../_common/components/logo.component';

import LandingImageComponent from './landing-image.component';
import ContentContainerComponent from './content-container.component';
import MenuComponent from './menu.component';

interface IComponentProps {
	location: any;
}

export default class MainPageComponent extends React.Component<IComponentProps, {}> {
	render() {
		return (
			<div className="main-page">
				<div id="main-page-content">
					<LogoComponent linkTo="/me" />
					<div className="main-page-content-container">
						<MenuComponent location={this.props.location} />
						<ContentContainerComponent
							location={this.props.location}
						/>
					</div>
				</div>
				<LandingImageComponent
					location={this.props.location}
					contentElementId="main-page-content"
				/>
			</div>
		);
	}
}