import React from 'react';
// import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

import styles from './Register.module.scss';

const Login = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-3'></div>
        <div
          className={
            'col-6 d-flex flex-column justify-content-center text-center ' +
            styles.registerForm
          }
        >
          <div className={styles.header}>
            <h1>Register</h1>
          </div>
          <div className={styles.formField}>
            <div className='row'>
              <div className='col-4 p-0 text-left'>
                <p>Login:</p>
              </div>
              <div className='col-8 p-0'>
                <input type='text' placeholder='Login*' required />
              </div>
            </div>
          </div>
          <div className={styles.formField}>
            <div className={styles.doubleInput}>
              <div className='row m-0'>
                <div className='col-4 m-0 p-0 text-left d-flex flex-column align-content-around'>
                  <p>Password:</p>
                  <p>Confirm password:</p>
                </div>
                <div className='col-8 p-0'>
                  <input type='password' placeholder='Password*' required />
                  <input type='password' placeholder='Repeat password*' required />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formField}>
            <div className='row'>
              <div className='col-4 p-0 text-left'>
                <p>E-mail:</p>
              </div>
              <div className='col-8 p-0'>
                <input type='email' placeholder='E-mail*' required />
              </div>
            </div>
          </div>
          <Button className={styles.Button} variant='register'>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  </div>
);

Login.propTypes = {};

export default Login;
