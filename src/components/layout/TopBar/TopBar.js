import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col text-left ${styles.topOptions}`}>
          <ul>
            <ul>
              <li>
                <a href='#'>
                  USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
                <ul className={styles.currency}>
                  <li>
                    <a href='#'>USD</a>
                  </li>
                  <li>
                    <a href='#'>PLN</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <a href='#'>
                  English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
                <ul className={styles.language}>
                  <li>
                    <a href='#'>English</a>
                  </li>
                  <li>
                    <a href='#'>Polski</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <a href='#'>
                  Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
                <ul className={styles.help}>
                  <li>
                    <a href='#'>About</a>
                  </li>
                  <li>
                    <a href='#'>FAQ</a>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </div>
        <div className={`col text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <a href='/login'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />{' '}
                <span className={styles.text}>Login</span>
              </a>
            </li>
            <li>
              <a href='/register'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} />
                <span className={styles.text}>Register</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
