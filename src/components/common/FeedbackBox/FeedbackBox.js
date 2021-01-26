import React from 'react';
import styles from './FeedbackBox.module.scss';

const FeedbackBox = props => {
  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <span className={styles.boxQuoteStamp}></span>
        <p className={styles.boxQuoteText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque harum
          soluta voluptate, accusantium iure sunt neque consectetur natus fuga! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque harum soluta
          voluptate.
        </p>
        <div className={styles.boxUser}>
          <div className={styles.userImage}>
            <img
              src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='user feedback'
            />
          </div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>John Smith</p>
            <small>Our Client</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackBox;
