import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackBox.module.scss';

const FeedbackBox = ({ imageUrl, text, author, aboutAuthor }) => {
  return (
    <div className={styles.root}>
      <figure className={styles.box}>
        <span className={styles.boxQuoteStamp}></span>
        <blockquote className={styles.boxQuoteText}>{text}</blockquote>
        <div className={styles.boxUser}>
          <div className={styles.userImage}>
            <img src={imageUrl} alt='user feedback' />
          </div>
          <div className={styles.userInfo}>
            <figcaption className={styles.userName}>
              {author} <cite>{aboutAuthor}</cite>
            </figcaption>
          </div>
        </div>
      </figure>
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
