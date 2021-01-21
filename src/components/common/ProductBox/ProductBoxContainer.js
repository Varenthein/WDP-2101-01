import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getProductToCompare, addToCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  compare: getProductToCompare(state),
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
