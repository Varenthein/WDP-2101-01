import { connect } from 'react-redux';
import StickyBar from './StickyBar';
import { getProductToCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  compare: getProductToCompare(state),
});

export default connect(mapStateToProps)(StickyBar);
