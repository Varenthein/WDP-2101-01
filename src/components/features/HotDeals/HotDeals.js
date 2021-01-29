import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDeals.module.scss';
import HotDealBox from '../../common/HotDealBox/HotDealBox';
import Swipeable from '../../common/Swipeable/Swipeable';
import AdvertBox from '../../common/AdvertBox/AdvertBox';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';

class HotDeals extends React.Component {
  state = {
    activeProduct: 0,
    activeAd: 0,
  };

  componentDidMount() {
    this.carousel();
  }

  carousel = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        prevProduct: prevState.activeProduct,
        activeProduct:
          prevState.activeProduct === this.props.products.length - 1
            ? 0
            : ++prevState.activeProduct,
      }));
    }, 3000);
  };

  stopCarousel = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  };

  handleProductChange(newPage) {
    this.stopCarousel();
    this.timeoutId = setTimeout(() => {
      this.carousel();
      clearTimeout(this.timeoutId);
    }, 8000);
    this.setState({ activeProduct: newPage });
  }

  handleAdChange(e, value) {
    e.preventDefault();

    if (this.state.activeAd === 0 && value === -1) {
      this.setState({ activeAd: 2 });
    } else if (this.state.activeAd === 2 && value === 1) {
      this.setState({ activeAd: 0 });
    } else if (value === 1) {
      this.setState({ activeAd: this.state.activeAd + 1 });
    } else if (value === -1) {
      this.setState({ activeAd: this.state.activeAd - 1 });
    }
  }

  render() {
    const { products, ads } = this.props;
    const { activeProduct, activeAd } = this.state;

    const dots = [];

    for (let i = 0; i < 3; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handleProductChange(i)}
            className={i === activeProduct && styles.active}
          ></a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={`${styles.row} row`}>
            <div className={`col-4 hotDeals`}>
              <div className={`${styles.panelBar} row no-gutters align-items-end`}>
                <div className={`col-6 ${styles.heading}`}>
                  <h3>Hot Deals</h3>
                </div>
                <div className={`col-6 ${styles.dots}`}>
                  <ul>{dots}</ul>
                </div>
              </div>
              <div className={'row' + styles.productBar}>
                {products.slice(activeProduct, activeProduct + 1).map(item => (
                  <div key={item.id} className='col-12'>
                    <HotDealBox {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div className={`col-8 hotDeals`}>
              <div className={styles.ads}>
                <div className={styles.adsContent}>
                  <div className={styles.adContent}>
                    {ads.slice(activeAd, activeAd + 1).map(ad => (
                      <div className={styles.ad} key={ad.id}>
                        <AdvertBox {...ad} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styles.adPanel}`}>
                  <Button
                    className={`${styles.button} arrow col-6`}
                    onClick={e => this.handleAdChange(e, -1)}
                  >
                    <FontAwesomeIcon icon={faArrowLeft}>left</FontAwesomeIcon>
                  </Button>
                  <Button
                    className={`${styles.button} arrow col-6`}
                    onClick={e => this.handleAdChange(e, 1)}
                  >
                    <FontAwesomeIcon icon={faArrowRight}>right</FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HotDeals.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  ads: PropTypes.array,
};

export default HotDeals;
