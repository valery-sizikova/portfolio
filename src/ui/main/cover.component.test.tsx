import * as React from "react";
import { shallow } from 'enzyme';

import CoverComponent from "./cover.component";

describe('Cover component', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(<CoverComponent />);
    expect(wrapper).toMatchSnapshot()
  })
})