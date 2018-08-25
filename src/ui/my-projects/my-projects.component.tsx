import * as React from 'react';

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
				<h2>MY PROJECTS</h2>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, nisl ut venenatis bibendum, purus nisl commodo est, sit amet euismod orci nisl ut ipsum. Aliquam erat volutpat. Vivamus interdum metus ex, et venenatis massa pretium quis. Fusce in ipsum massa. Proin non cursus odio. Mauris ut sem euismod, elementum ex vel, sollicitudin sem. Cras a nunc vitae turpis hendrerit pretium.
				Aliquam luctus leo neque, et tincidunt urna rhoncus ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut elementum quam felis, sed finibus dui bibendum sed. Integer tempus orci nec elit eleifend pharetra. Phasellus sodales turpis sit amet sodales gravida. Duis mollis eleifend neque vel dignissim. Nunc lacinia non nunc eu aliquam. Vivamus eget orci id metus aliquet vulputate. Nunc condimentum eros metus, nec ultricies risus interdum id. Praesent malesuada, nunc sit amet tincidunt finibus, tellus mi scelerisque ante, vitae fermentum lorem dui eget nulla.
			</div>
		);
	}
}