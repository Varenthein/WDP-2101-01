import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getProductToCompare, addToCompare } from '../../../redux/compareRedux';

const mapStateToProps = (state, props) => ({
  compare: getProductToCompare(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addToCompare: () =>
    dispatch(
      addToCompare({
        id: props.id,
        ...props,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
