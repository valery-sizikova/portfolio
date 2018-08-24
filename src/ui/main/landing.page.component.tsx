import * as React from 'react';
import AboutComponent from './about.component';
import CoverImageComponent from './cover-image.component';

interface IComponentProps { }

interface IComponentState { }

export default class LandingPageComponent extends React.Component<IComponentProps, IComponentState> {
  constructor(props: IComponentProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="landing-page">
        <div id="content">
          <AboutComponent />
        </div>
        <CoverImageComponent contentElementId="content" />
      </div>
    );
  }
}