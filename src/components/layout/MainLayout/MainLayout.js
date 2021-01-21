import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ADD_WINDOW_WIDTH } from '../../../redux/deviceTypeRedux';

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    addWindowWidth: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.props.addWindowWidth(ADD_WINDOW_WIDTH);
    window.addEventListener('resize', () =>
      this.props.addWindowWidth(ADD_WINDOW_WIDTH)
    );
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
