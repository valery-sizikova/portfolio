import * as React from "react";
import { shallow } from 'enzyme';

import CoverImageComponent from "./cover-image.component";

describe('Cover image component', () => {
  it('renders snapshots', () => {
    const wrapper = shallow(
      <CoverImageComponent location={""}
        contentElementId="test-content" />
    );
    expect(wrapper).toMatchSnapshot()
  })
})