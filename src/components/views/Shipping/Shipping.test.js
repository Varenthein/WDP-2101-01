import React from 'react';
import { shallow } from 'enzyme';
import Shipping from './Shipping';

describe('Shipping', () => {
  it('renders without crashing', () => {
    shallow(<Shipping />);
  });
});
