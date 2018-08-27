import * as React from 'react';

import InfoItemComponent from '../_common/components/info-item.component';

import semmtech_logo from "../_common/images/semmtech_logo.png";
import customergauge_logo from "../_common/images/customergauge_logo.png";
import trendwatching_logo from "../_common/images/trendwatching_logo.png";

export default class MyProjectsComponent extends React.Component<{}, {}> {
	render() {
		return (
			<div className="my-projects-container">
				Some description
				<br />
				<br />
				<div className="project-list grid-x grid-margin-x">
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