import * as React from 'react';
import { Menu, MenuItem } from 'react-foundation';
import { Element, Link } from "react-scroll";

class Section {
  label: string;
  id: string;
}

interface IComponentProps { }

interface IComponentState {
  sections: Section[];
}

export default class MainPageComponent extends React.Component<IComponentProps, IComponentState> {
  constructor(props: IComponentProps) {
    super(props);
    this.state = {
      sections: [
        {
          label: "Section 1",
          id: "section_1"
        },
        {
          label: "Section 2",
          id: "section_2"
        },
        {
          label: "Section 3",
          id: "section_3"
        },
        {
          label: "Section 4",
          id: "section_4"
        }
      ]
    };
  }

  handleSetActive(to: string) {
    console.log(to);
  }

  render() {
    return (
      <div className="main-container">
        <Menu className="navbar" isVertical>
          {this.state.sections.map(x => <MenuItem
            key={`link_to_${x.id}`}
          >
            <Link
              activeClass="active"
              to={x.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onSetActive={this.handleSetActive}>
              {x.label}
            </Link>
          </MenuItem>)}
        </Menu>
        {this.state.sections.map(x =>
          <Element key={`section_${x.id}`} name={x.id} className="element">
            <section className="section-big">
              <h4>{x.label}</h4>
            </section>
          </Element>
        )}
      </div>
    );
  }
}