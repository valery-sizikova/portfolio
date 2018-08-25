import * as React from 'react';

interface IComponentProps { }

interface IComponentState { }

export default class MeComponent extends React.Component<IComponentProps, IComponentState> {
	constructor(props: IComponentProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="me-container">
				<h2>ME</h2>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, nisl ut venenatis bibendum, purus nisl commodo est, sit amet euismod orci nisl ut ipsum. Aliquam erat volutpat. Vivamus interdum metus ex, et venenatis massa pretium quis. Fusce in ipsum massa. Proin non cursus odio. Mauris ut sem euismod, elementum ex vel, sollicitudin sem. Cras a nunc vitae turpis hendrerit pretium.
				Integer eget sagittis eros, eget ultricies metus. Etiam a euismod dolor. Etiam at ante lobortis, lacinia felis eget, ullamcorper ligula. Nulla quam justo, faucibus nec risus eu, consectetur aliquam lectus. Fusce euismod, justo vel suscipit bibendum, ante purus mattis libero, quis dignissim est nisi vitae dui. Suspendisse posuere arcu vel aliquam ultrices. Ut sed neque ex. Vestibulum volutpat quam at vulputate aliquet. Vivamus sit amet lorem eget dolor consequat pulvinar. Donec in volutpat lorem. Curabitur mollis congue velit.
			</div>
		);
	}
}