import * as React from 'react';

import InfoItemComponent from './../_common/components/info-item.component';

import semmtech_logo from "./../_common/images/semmtech_logo.png";
import customergauge_logo from "./../_common/images/customergauge_logo.png";
import trendwatching_logo from "./../_common/images/trendwatching_logo.png";

export default class MyProjectsComponent extends React.Component<{}, {}> {
	render() {
		return (
			<div className="my-projects-container">
				It's not fashionable any more to add screenshots of your work photoshoped into stock photos of laptops. So I will just link the projects I worked on.
				<br />
				<hr />
				<br />
				<div className="project-list grid-x grid-margin-x">
					<InfoItemComponent
						link="https://semmtech.com/products"
						title="Semmtech"
						description={<p>
							Product suit meant to help people in Building and Construction industry to amnage their master data and data about projects utilizing Linked Data and Semantic Web technologies.
							<br />
							<br />
							<strong>TypeScript, React, Webpack,<br /> MongoDB, Java, Spring</strong>
						</p>}
						image={<img src={semmtech_logo} alt="Semmtech" />}
					/>

					<InfoItemComponent
						link="https://customergauge.com/product"
						title="CustomerGauge"
						description={<p>
							This application is an extensive tool for monitoring, managing and reporting data regarding Net Promoter Score - key indicator of customer satisfaction.
							<br />
							<br />
							<strong>JavaScript, React, Sass, Gulp</strong>
						</p>}
						image={<img src={customergauge_logo} alt="Customergauge" />}
					/>

					<InfoItemComponent
						link="https://trendwatching.com"
						title="Qusus & Trendwatching"
						description={<p>
							Qusus is a place where people can share their constructive suggestions to different brands and products. (Project closed)
							Trendwatching is a platform for those who wants to stay on top of innovations happening in the world.
							<br />
							<br />
							<strong>JavaScript, AngularJS, Ionic, Sass, Gulp</strong>
						</p>}
						image={<img src={trendwatching_logo} alt="Trendwatching" />}
					/>

				</div>
			</div>
		);
	}
}