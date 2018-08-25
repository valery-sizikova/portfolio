import * as React from 'react';
import CoverImageComponent from './cover-image.component';
import MainContentComponent from './main-content.component';

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
        <MainContentComponent />
        <CoverImageComponent contentElementId="content" />
      </div>
    );
  }
}