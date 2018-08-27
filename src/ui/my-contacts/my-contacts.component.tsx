import * as React from 'react';

import InfoItemComponent from './../_common/components/info-item.component';

import facebook_logo from "./../_common/images/facebook.png";
import email_logo from "./../_common/images/email.png";
import linkedin_logo from "./../_common/images/linkedin.png";
import github_logo from "./../_common/images/github.png";
import instagram_logo from "./../_common/images/instagram.png";

export default class MyContactsComponent extends React.Component<{}, {}> {
	render() {
		return (
			<div className="my-contacts-container">
				Some description
				<br />
				<a
					target="_blank"
					href={"https://drive.google.com/file/d/1uZx4g2gSUTlWbac499k2GpU4Gvlr1jzw/view?usp=sharing"}>
					CV
				</a>
				<br />
				<br />
				<div className="contact-list grid-x grid-margin-x">
					<InfoItemComponent
						link="mailto:valery.sizikova@gmail.com"
						description="Email"
						image={<img src={email_logo} alt="Email" />}
					/>
					<InfoItemComponent
						link="https://www.linkedin.com/in/vsizikova/"
						description="Linkedin"
						image={<img src={linkedin_logo} alt="Linkedin" />}
					/>
					<InfoItemComponent
						link="https://github.com/valery-sizikova"
						description="Github"
						image={<img src={github_logo} alt="Github" />}
					/>
					<InfoItemComponent
						link="https://www.facebook.com/valery.sizikova"
						description="Facebook"
						image={<img src={facebook_logo} alt="Facebook" />}
					/>
					<InfoItemComponent
						link="https://www.instagram.com/sharlsharl/"
						description="Instagram"
						image={<img src={instagram_logo} alt="Instagram" />}
					/>
				</div>
			</div>
		);
	}
}