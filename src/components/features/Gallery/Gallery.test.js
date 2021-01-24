import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './GalleryContainer';

describe('Component Gallery', () => {
  it('should render without crashing', () => {
    const component = shallow(<Gallery />);
    expect(component).toBeTruthy();
  });
});