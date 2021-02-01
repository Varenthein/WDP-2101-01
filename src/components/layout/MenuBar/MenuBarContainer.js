import { connect } from 'react-redux';

import MenuBar from './MenuBar';
import { getNavbar } from '../../../redux/navbarRedux';

const mapStateToProps = (state, props) => ({
  navbar: getNavbar(state, props),
});

export default connect(mapStateToProps)(MenuBar);
