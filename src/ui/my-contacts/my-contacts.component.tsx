import * as React from 'react';

import InfoItemComponent from './../_common/components/info-item.component';

import facebook_logo from "./../_common/images/facebook.png";
import email_logo from "./../_common/images/email.png";
import linkedin_logo from "./../_common/images/linkedin.png";
import github_logo from "./../_common/images/github.png";
import cv_logo from "./../_common/images/cv.png";

export default class MyContactsComponent extends React.Component<{}, {}> {
	render() {
		return (
			<div className="my-contacts-container">
				Some description
				<br />
				<hr />
				<br />
				<div className="contact-list grid-x grid-margin-x">
					<InfoItemComponent
						link="mailto:valery.sizikova@gmail.com"
						title="Email"
						description={<p>The best option to reach me is to write me an email.</p>}
						image={<img src={email_logo} alt="Email" />}
					/>
					<InfoItemComponent
						link="https://drive.google.com/file/d/1uZx4g2gSUTlWbac499k2GpU4Gvlr1jzw/view?usp=sharing"
						title="CV"
						description={<p>You can also see my CV on Google Drive.</p>}
						image={<img src={cv_logo} alt="CV" />}
					/>
					<InfoItemComponent
						link="https://www.linkedin.com/in/vsizikova/"
						title="Linkedin"
						description={<p>I am that person who managed to unsubscribe from ALL Linkedin notifications so chances are low that I'm going to see your message on time.</p>}
						image={<img src={linkedin_logo} alt="Linkedin" />}
					/>
					<InfoItemComponent
						link="https://github.com/valery-sizikova"
						title="Github"
						description={<p>This portfolio is hosted on Github pages so it must be easy to guess my profile id but ok, here is the link.</p>}
						image={<img src={github_logo} alt="Github" />}
					/>
					<InfoItemComponent
						link="https://www.facebook.com/valery.sizikova"
						title="Facebook"
						description={<p>I am not an active Facebook user but look, I am not embarresed to share the link to my profile. Nothing interesting there though.</p>}
						image={<img src={facebook_logo} alt="Facebook" />}
					/>
				</div>
			</div>
		);
	}
}