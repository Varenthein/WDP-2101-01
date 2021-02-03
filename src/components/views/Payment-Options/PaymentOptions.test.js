import React from 'react';
import { shallow } from 'enzyme';
import PaymentOptions from './PaymentOptions';

describe('PaymentOptions', () => {
  it('renders without crashing', () => {
    shallow(<PaymentOptions />);
  });
});
