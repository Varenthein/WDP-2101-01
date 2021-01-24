import { connect } from 'react-redux';

import GallerySlider from './GallerySlider';

import { getAll, getGallery } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  gallery: getGallery(state),
});

export default connect(mapStateToProps)(GallerySlider);