import { connect } from 'react-redux';

import ProductBox from './ProductBox';
import { getAll, addFavorite, removeFavorite } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
});

const mapDispatchToProps = dispatch => ({
  addFavorite: product => dispatch(addFavorite(product)),
  removeFavorite: product => dispatch(removeFavorite(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
