import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getDeviceType } from '../../../redux/deviceTypeRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  deviceType: getDeviceType(state),
});

export default connect(mapStateToProps)(NewFurniture);
