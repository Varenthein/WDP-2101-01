import { connect } from 'react-redux';

import { getAll, toggleFavorite } from '../../../redux/productsRedux';
import HotDealBox from './HotDealBox';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: product => dispatch(toggleFavorite(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotDealBox);
