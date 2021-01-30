import PropTypes from 'prop-types';
import React from 'react';

import styles from './Button.module.scss';

const propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  label: 'Close',
};

class CloseButton extends React.Component {
  render() {
    const { label, onClick } = this.props;
    return (
      <button className={styles.closeButton} onClick={onClick}>
        <span aria-hidden='true'>&times;</span>
        <span className='sr-only'>{label}</span>X
      </button>
    );
  }
}

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;