import * as React from 'react';

interface IComponentProps {
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

  showContent() {
    const slider = document.getElementById("slider-landing-image");
    const toggle = document.getElementById("slider-landing-text");
    const content = document.getElementById(this.props.contentElementId);
    if (slider) {
      slider.setAttribute("class", "hidden");
    }
    if (content) {
      content.setAttribute("class", "shown");
    }
    if (toggle) {
      toggle.setAttribute("class", "hidden");
    }
    this.setState({
      isShown: false
    })
  }

  render() {
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
      <div id="slider-landing-text">
        <div className="landing-text">
          <a
            href="#"
            onClick={() => this.showContent()}
            className="animated-button inversed diagonal-sliding">
            It's really cold in Russia, isn't it?
        </a>
        </div>
      </div>
    </>
    );
  }
}