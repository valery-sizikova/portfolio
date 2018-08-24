import * as React from "react";
import { shallow } from 'enzyme';

import LandingPageComponent from "./landing.page.component";

describe('Landing page component', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(<LandingPageComponent />);
    expect(wrapper).toMatchSnapshot()
  })
})