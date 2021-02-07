import React from 'react';
// import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

import styles from './Login.module.scss';

const Login = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-4'></div>
        <div
          className={
            'col-4 d-flex flex-column justify-content-center text-center ' +
            styles.loginForm
          }
        >
          <div className={styles.header}>
            <h1>Login</h1>
          </div>
          <div className={styles.formField}>
            <p>Login:</p>
            <input type='text' placeholder='Login*' required />
          </div>
          <div className={styles.formField}>
            <p>Password:</p>
            <input type='password' placeholder='Password*' required />
          </div>
          <Button className={styles.Button} variant='login'>
            Login
          </Button>
        </div>
      </div>
    </div>
  </div>
);

Login.propTypes = {};

export default Login;
