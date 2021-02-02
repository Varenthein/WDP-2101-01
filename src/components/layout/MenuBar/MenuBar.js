import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ navbar }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <input type='checkbox' id='nav' className={styles.menuCheckbox} />
          <label htmlFor='nav' className={styles.menuButton}>
            <span className={styles.menuIcon}></span>
          </label>
          <nav className={styles.menu}>
            {navbar.map(({ linkTo, linkName, id }) => (
              <NavLink key={id} exact to={linkTo} activeClassName={styles.active}>
                {linkName}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
  navbar: PropTypes.array,
};

MenuBar.defaultProps = {
  navbar: [],
};

export default MenuBar;
