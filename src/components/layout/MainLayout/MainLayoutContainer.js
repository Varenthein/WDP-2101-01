import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getDeviceType, addWindowWidth } from '../../../redux/deviceTypeRedux.js';

const mapStateToProps = state => ({
  deviceType: getDeviceType(state),
});

const mapDispatchToProps = dispatch => ({
  addWindowWidth: window => dispatch(addWindowWidth(window)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
