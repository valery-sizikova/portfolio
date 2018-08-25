import * as React from 'react';
import { Link } from 'react-router-dom';

interface IComponentProps {
	location: any;
	contentElementId: string;
}

interface IComponentState {
	isShown: boolean;
}

export default class CoverImageComponent extends React.Component<IComponentProps, IComponentState> {
	constructor(props: IComponentProps) {
		super(props);
		this.state = {
			isShown: true
		};
	}

	componentDidMount() {
		if (this.props.location.pathname !== "/") {
			this.showContent();
		}
	}

	showContent() {
		const slider = document.getElementById("slider-landing-image");
		const toggle = document.getElementById("slider-landing-text");
		const content = document.getElementById(this.props.contentElementId);
		if (slider) {
			slider.setAttribute("class", "hidden");
		}
		if (toggle) {
			toggle.setAttribute("class", "hidden");
		}
		if (content) {
			content.setAttribute("class", "shown");
		}
		this.setState({
			isShown: false
		})
	}

	render() {
		const textVisible = this.props.location.pathname !== "/"
			&& this.props.location.pathname !== "/me";
		let tiles: JSX.Element[] = [];
		for (let i = 0; i < 400; i++) {
			tiles.push(<div className="landing-tile" key={`tile_${i}`}></div>)
		}
		return (<>
			<div id="slider-landing-image">
				<div className="landing-image">
					{this.state.isShown && <>
						{tiles}
					</>}
				</div>
			</div>
			<div id="slider-landing-text" style={textVisible ? {"display": "none"} : {}}>
				<div className="landing-text">
					<Link
						className={"animated-button inversed diagonal-sliding"}
						to={"/me"}
						onClick={() => this.showContent()}
					>
						It's really cold in Russia, isn't it?
						</Link>
				</div>
			</div>
		</>
		);
	}
}