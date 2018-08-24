import * as React from "react";
import { shallow } from 'enzyme';

import MeComponent from "./me.component";

describe('Me component', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(<MeComponent />);
    expect(wrapper).toMatchSnapshot()
  })
})