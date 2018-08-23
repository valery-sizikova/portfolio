import * as React from 'react';
import AboutComponent from './about.component';
import CoverComponent from './cover.component';

interface IComponentProps { }

interface IComponentState { }

export default class MainPageComponent extends React.Component<IComponentProps, IComponentState> {
  constructor(props: IComponentProps) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="main-container" id="main-container">
        <CoverComponent />
        <div className="content-container">
            <AboutComponent />
        </div>
      </div>
    );
  }
}