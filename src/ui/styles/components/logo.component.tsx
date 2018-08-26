import * as React from 'react';

export default class LogoComponent extends React.Component<{}, {}> {
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
			<div className="logo">
				<div className="logo-lines">{lines}</div>
				<div className="logo-name"></div>
			</div>
		);
	}
}