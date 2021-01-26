import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackBox.module.scss';

const FeedbackBox = ({ imageUrl, text, author, aboutAuthor }) => {
  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <span className={styles.boxQuoteStamp}></span>
        <p className={styles.boxQuoteText}>{text}</p>
        <div className={styles.boxUser}>
          <div className={styles.userImage}>
            <img src={imageUrl} alt='user feedback' />
          </div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>{author}</p>
            <small>{aboutAuthor}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

FeedbackBox.propTypes = {
  imageUrl: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.string,
  aboutAuthor: PropTypes.string,
};

export default FeedbackBox;
