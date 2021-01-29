import { connect } from 'react-redux';

import HotDeals from './HotDeals';

import { getHotDeals, getAds } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getHotDeals(state),
  ads: getAds(state),
});

export default connect(mapStateToProps)(HotDeals);
