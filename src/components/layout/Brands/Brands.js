import React, { useState } from 'react';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';
import PropTypes from 'prop-types';

function getBrandsSets({ brands, brandPerSet }) {
  const setsAmount = Math.ceil(brands / brandPerSet);
  const sets = [];
  for (let i = 0; i < setsAmount; i++) {
    sets.push(brands.slice(i * brandPerSet, i * brandPerSet + brandPerSet));
  }
  return sets;
}

function Brands({ brands }) {
  const [index, setIndex] = useState(0);

  const brandPerSet = 6;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={styles.wrapper}>
            <div className={styles.arrow} onClick={() => setIndex(index - 1)}>
              <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
            </div>
            <Swipeable
              onLeftAction={() => setIndex(index - 1)}
              onRightAction={() => setIndex(index + 1)}
              enableMouseEvents
            >
              {getBrandsSets(brands, brandPerSet).map(set => {
                return (
                  <div className={styles.brandList} key={set.id}>
                    {set.map(brand => (
                      <div className={styles.brands} key={brand.id} {...brand}>
                        <img src={brand.image} alt='brand-logo' />
                      </div>
                    ))}
                  </div>
                );
              })}
            </Swipeable>
            <button className={styles.arrow} onClick={() => setIndex(index + 1)}>
              <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
