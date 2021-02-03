import React from 'react';
import PropTypes from 'prop-types';
import styles from './GallerySlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faEye,
} from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

class GallerySlider extends React.Component {
  state = {
    activeSlidePage: 0,
  };

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { gallery } = this.props;
    const { activeCategory } = this.state;

    return (
      <div className={styles.root}>
        <h5 className={styles.title}>FURNITURE GALLERY</h5>
        <div className={styles.menu}>
          <ul>
            {gallery.map(item => (
              <li key={item.id}>
                <a
                  className={item.id === activeCategory && styles.active}
                  onClick={() => this.handleCategoryChange(item.id)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sliderImageWrapper}>
          <img className={styles.image} src='/images/couch.jpg' alt='Couch' />
          <div className={styles.buttonsWrapper}>
            <div className={styles.button}>
              <Button variant='gallerySlider'>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </Button>
              <span>Add To Favorite</span>
            </div>
            <div className={styles.button}>
              <Button variant='gallerySlider'>
                <FontAwesomeIcon icon={faExchangeAlt} />
              </Button>
              <span>Add To Compare</span>
            </div>
            <div className={styles.button}>
              <Button variant='gallerySlider'>
                <FontAwesomeIcon icon={faEye} />
              </Button>
              <span>Enlarge</span>
            </div>
            <div className={styles.button}>
              <Button variant='gallerySlider'>
                <FontAwesomeIcon icon={faShoppingBasket} />
              </Button>
              <span>Add To Cart</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GallerySlider.propTypes = {
  gallery: PropTypes.array,
};

export default GallerySlider;