import React from 'react';
import { shallow } from 'enzyme';
import GallerySlider from './GallerySlider';

describe('Component GallerySlider', () => {
  it('should render without crashing', () => {
    const component = shallow(<GallerySlider />);
    expect(component).toBeTruthy();
  });
});