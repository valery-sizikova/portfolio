import * as React from 'react';
import semmtech_logo from "src/ui/styles/images/semmtech_logo.png";
import customergauge_logo from "src/ui/styles/images/customergauge_logo.png";
import trendwatching_logo from "src/ui/styles/images/trendwatching_logo.png";

import InfoItemComponent from '../styles/components/info-item.component';

interface IComponentProps { }

interface IComponentState { }

export default class MyProjectsComponent extends React.Component<IComponentProps, IComponentState> {
	constructor(props: IComponentProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="my-projects-container">
				Some description
				<br />
				<br />
				<div className="projects-list grid-x grid-margin-x">
					<InfoItemComponent
						link="https://semmtech.com/products"
						description="Semmtech project"
						image={<img src={semmtech_logo} alt="Semmtech" />}
					/>

					<InfoItemComponent
						link="https://customergauge.com/product"
						description="Customergauge project"
						image={<img src={customergauge_logo} alt="Customergauge" />}
					/>

					<InfoItemComponent
						link="https://trendwatching.com"
						description="Trendwatching project"
						image={<img src={trendwatching_logo} alt="Trandwatching" />}
					/>

				</div>
			</div>
		);
	}
}