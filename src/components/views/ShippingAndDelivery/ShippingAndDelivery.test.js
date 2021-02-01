import React from 'react';
import { shallow } from 'enzyme';
import ShippingAndDelviery from './ShippingAndDelviery';

describe('ShippingAndDelviery', () => {
  it('renders without crashing', () => {
    shallow(<ShippingAndDelviery />);
  });
});
