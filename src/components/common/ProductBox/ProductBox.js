import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarsRating from './../StarsRating/StarsRating';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  userRating,
  imageSource,
  oldPrice,
  isExchange,
  isFavorite,
  toggleFavorite,
  id,
}) => (
  <div className={styles.root}>
    <div
      className={styles.photo}
      style={{
        backgroundImage: `url("${imageSource}")`,
      }}
    >
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket} /> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        <StarsRating rating={stars} userRating={userRating} />
      </div>
    </div>
    <div className={styles.line} />
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          variant='outline'
          className={isFavorite === true ? styles.favorite : 'nonclass'}
          onClick={event => `${toggleFavorite({ id })} ${event.preventDefault()}`}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          variant='outline'
          className={isExchange === true ? styles.exchange : 'nonclass'}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <del className={styles.expiredContainer}>
          {oldPrice ? <span className={styles.expiredPrice}>$ {oldPrice}</span> : null}
        </del>
        <Button className={styles.Button} variant='small' noHover>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userRating: PropTypes.number,
  imageSource: PropTypes.string,
  isExchange: PropTypes.bool,
  isFavorite: PropTypes.bool,
  toggleFavorite: PropTypes.func,
  id: PropTypes.string,
};

export default ProductBox;
