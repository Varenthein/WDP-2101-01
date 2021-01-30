import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
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
            <NavLink exact to='/' activeClassName={styles.active}>
              Home
            </NavLink>
            <NavLink exact to='/shop/furniture' activeClassName={styles.active}>
              Furniture
            </NavLink>
            <NavLink exact to='/shop/chair' activeClassName={styles.active}>
              Chair
            </NavLink>
            <NavLink exact to='/shop/table' activeClassName={styles.active}>
              Table
            </NavLink>
            <NavLink exact to='/shop/sofa' activeClassName={styles.active}>
              Sofa
            </NavLink>
            <NavLink exact to='/shop/bedroom' activeClassName={styles.active}>
              Bedroom
            </NavLink>
            <NavLink exact to='/blog' activeClassName={styles.active}>
              Blog
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
