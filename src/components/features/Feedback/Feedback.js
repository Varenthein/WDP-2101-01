import React, { Component } from 'react';
import styles from './Feedback.module.scss';
import FeedbackBox from '../../common/FeedbackBox/FeedbackBox';

class Feedback extends Component {
  state = {
    currentPage: 0,
  };

  render() {
    // TODO changing pages on click, add correct class to active dot
    const dots = [
      <li key={1}>
        <a className={styles.active}>page 1</a>
      </li>,
      <li key={2}>
        <a>page 2</a>
      </li>,
      <li key={3}>
        <a>page 3</a>
      </li>,
    ];
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.feedback}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <FeedbackBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
