import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ children }) => (
  <footer className={styles.root}>
    <div className={styles.footerMenu}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#'>About us</a>
                </li>
                <li>
                  <a href='#'>Policy</a>
                </li>
                <li>
                  <a href='#'>Conditions</a>
                </li>
                <li>
                  <a href='#'>Online support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col'>
            <div className={styles.menuWrapper}>
              <h6>My account</h6>
              <ul>
                <li>
                  <a href='/login'>Login</a>
                </li>
                <li>
                  <a href='#'>My cart</a>
                </li>
                <li>
                  <a href='#'>Wishlist</a>
                </li>
                <li>
                  <a href='#'>Checkout</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col'>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <a href='#'>Specials</a>
                </li>
                <li>
                  <a href='#'>New products</a>
                </li>
                <li>
                  <a href='#'>Best Sellers</a>
                </li>
                <li>
                  <a href='#'>Out Stores</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col'>
            <div className={styles.menuWrapper}>
              <h6>Orders</h6>
              <ul>
                <li>
                  <a href='/payment-options'>Payment options</a>
                </li>
                <li>
                  <a href='/shipping-and-delivery'>Shipping and delivery</a>
                </li>
                <li>
                  <a href='/returns'>Returns</a>
                </li>
                <li>
                  <a href='/shipping'>Shipping</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.paymentMethods}>
          <ul>
            <li>
              <img src='./images/visa.png' alt='VISA' />
            </li>
            <li>
              <img src='./images/mastercard.png' alt='MasterCard' />
            </li>
            <li>
              <img src='./images/discover.png' alt='Discover' />
            </li>
            <li>
              <img src='./images/amex.png' alt='American Express' />
            </li>
            <li>
              <img src='./images/paypal.png' alt='PayPal' />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className='container'>
        <div className='row align-items-center'>
          <div
            className={
              'col-12 col-xl-4 d-none d-md-block text-md-center d-xl-block ' +
              styles.copyright
            }
          ></div>
          <div
            className={
              'col-12 col-sm-6 col-xl-4 text-center text-md-left ' + styles.copyright
            }
          >
            <p>©Copyright 2021 Bazar | All Rights Reserved</p>
          </div>
          <div
            className={
              'col-12 col-sm-6 col-xl-4 text-center text-sm-right ' + styles.socialMedia
            }
          >
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
