import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getProductToCompare, addToCompare } from '../../../redux/compareRedux';
import { getAll, toggleFavorite } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => ({
  compare: getProductToCompare(state),
  products: getAll(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  toggleFavorite: product => dispatch(toggleFavorite(product)),
  addToCompare: () =>
    dispatch(
      addToCompare({
        id: props.id,
        ...props,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
