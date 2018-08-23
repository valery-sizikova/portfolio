import * as React from 'react';

interface IComponentProps { }

interface IComponentState {
  isCovered: boolean;
}

export default class CoverComponent extends React.Component<IComponentProps, IComponentState> {
  constructor(props: IComponentProps) {
    super(props);
    this.state = {
      isCovered: true
    };
  }

  handleClick() {
    const el = document.getElementById("main-container");
    if (el) {
      el.setAttribute("class", "clicked");
    }
    this.setState({
      isCovered: false
    })
  }

  render() {
    let tiles: JSX.Element[] = [];
    for (let i = 0; i < 400; i++) {
      tiles.push(<div className="image-cover" key={`tile_${i}`}></div>)
    }
    return (
        <div className="image">
          {this.state.isCovered && <>
            {tiles}
            <div className="landing-text">
              <a
                href="#"
                onClick={() => this.handleClick()}
                className="btn btn-sm animated-button victoria-two">
                It's cold in Russia, isn't it?
            </a>
            </div>
          </>}
        </div>
    );
  }
}