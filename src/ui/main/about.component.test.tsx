import * as React from "react";
import { shallow } from 'enzyme';

import AboutComponent from "./about.component";

describe('About component', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(<AboutComponent />);
    expect(wrapper).toMatchSnapshot()
  })
})