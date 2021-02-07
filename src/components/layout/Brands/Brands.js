import React, { useState } from 'react';
import styles from './Brands.module.scss';

import Swipeable from '../../common/Swipeable/Swipeable';
import PropTypes from 'prop-types';

function getBrandsSets(brands, brandPerSet) {
  const setsAmount = Math.ceil(brands.length / brandPerSet);
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
            <Swipeable
              onLeftAction={() => setIndex(index - 1)}
              onRightAction={() => setIndex(index + 1)}
              enableMouseEvents
            >
              {getBrandsSets(brands, brandPerSet).map(sets => {
                return (
                  <div className={styles.brandList} key={sets.id}>
                    {sets.map(brand => (
                      <div className={styles.brands} key={brand.id} {...brand}>
                        <img src={brand.image} alt='brand-logo' />
                      </div>
                    ))}
                  </div>
                );
              })}
            </Swipeable>
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
