import { connect } from 'react-redux';
import { getAll, getGallery } from '../../../redux/productsRedux.js';
import GallerySlider from './GallerySlider';

const mapStateToProps = state => ({
  products: getAll(state),
  gallery: getGallery(state),
});

export default connect(mapStateToProps)(GallerySlider);