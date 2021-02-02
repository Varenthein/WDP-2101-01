import React from 'react';
import { shallow } from 'enzyme';
import ShippingAndDelivery from './ShippingAndDelivery';

describe('ShippingAndDelviery', () => {
  it('renders without crashing', () => {
    shallow(<ShippingAndDelivery />);
  });
});
