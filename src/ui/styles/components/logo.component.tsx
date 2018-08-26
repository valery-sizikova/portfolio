import * as React from 'react';
import { Link } from 'react-router-dom';

interface IComponentProps {
	linkTo: string;
}

export default class LogoComponent extends React.Component<IComponentProps, {}> {
	render() {
		let lines = [];
		for (let i = 0; i <= 8; i++) {
			lines.push(<div
				className="animated-line"
				key={`line_${i}`}
				style={{ "animationDelay": `${0 + 0.3 * i}s` }}>
			</div>)
		}
		return (
			<Link to={this.props.linkTo} className="logo">
				<div className="logo-lines">{lines}</div>
				<div className="logo-name"></div>
			</Link>
		);
	}
}