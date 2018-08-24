import * as React from 'react';
import CoverImageComponent from './cover-image.component';
import MeComponent from '../me/me.component';

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
          <MeComponent />
        </div>
        <CoverImageComponent contentElementId="content" />
      </div>
    );
  }
}