import React from 'react';
import { shallow } from 'enzyme';
import Returns from './Returns';

describe('Returns', () => {
  it('renders without crashing', () => {
    shallow(<Returns />);
  });
});
