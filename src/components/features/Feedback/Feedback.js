import React, { Component } from 'react';
import styles from './Feedback.module.scss';
import PropTypes from 'prop-types';
import FeedbackBox from '../../common/FeedbackBox/FeedbackBox';
import Swipeable from '../../common/Swipeable/Swipeable';

class Feedback extends Component {
  state = {
    currentPage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ currentPage: newPage });
  }

  render() {
    const { feedback, feedbackCount } = this.props;
    const { currentP } = this.state;

    const dots = [];
    for (let i = 0; i < feedbackCount; i++) {
      dots.push(
        <li key={i}>
          <a
            className={i === currentPage && styles.active}
            onClick={() => this.handlePageChange(i)}
          >
            {i}
          </a>
        </li>
      );
    }

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
              <Swipeable
                onLeftAction={() => this.handlePageChange(currentPage - 1)}
                onRightAction={() => this.handlePageChange(currentPage + 1)}
                enableMouseEvents
              >
                {feedback
                  .slice(
                    (currentPage === 0
                      ? currentPage + feedback.id
                      : currentPage * feedback.id,
                    currentPage === 0
                      ? currentPage + feedback.id + 1
                      : currentPage * feedback.id + 1)
                  )
                  .map(item => (
                    <FeedbackBox key={item.id} {...item} />
                  ))}
              </Swipeable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.array,
  feedbackCount: PropTypes.number,
};

Feedback.defaultProps = {
  feedback: [],
  feedbackCount: 0,
};

export default Feedback;
