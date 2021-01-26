import { connect } from 'react-redux';

import Promotions from './Promotions';
import { getPromotions } from '../../../redux/promotionsRedux';

const mapStateToProps = (state, props) => ({
  promotions: getPromotions(state, props),
});

export default connect(mapStateToProps)(Promotions);
