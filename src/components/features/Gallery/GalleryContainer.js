import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';
import Gallery from './Gallery';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(Gallery);