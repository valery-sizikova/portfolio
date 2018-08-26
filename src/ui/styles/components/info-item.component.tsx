import * as React from 'react';

interface IComponentProps {
	link: string;
	description: string;
	image: JSX.Element;
}

export default class InfoItemComponent extends React.Component<IComponentProps, {}> {
	constructor(props: IComponentProps) {
		super(props);
	}

	render() {
		return (
			<a
				href={this.props.link}
				target="_blank"
				className="info-item small-4 cell">
				<div className="info-item-description">{this.props.description}</div>
				<div className="info-item-image">
					{this.props.image}
				</div>
			</a>
		);
	}
}