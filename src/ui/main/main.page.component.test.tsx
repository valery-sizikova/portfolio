import * as React from "react";
import { shallow } from 'enzyme';

import MainPageComponent from "./main.page.component";

describe('Main page component', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(<MainPageComponent />);
    expect(wrapper).toMatchSnapshot()
  })
})