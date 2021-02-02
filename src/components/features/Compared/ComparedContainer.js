import { connect } from 'react-redux';
import Compared from './Compared';
import { removeFromCompare } from '../../../redux/compareRedux';

const mapDispatchToProps = (dispatch, props) => ({
  removeFromCompare: () =>
    dispatch(
      removeFromCompare({
        ...props,
      })
    ),
});

export default connect(null, mapDispatchToProps)(Compared);
