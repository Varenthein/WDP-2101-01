import React from 'react';
import styles from './StickyBar.module.scss';
import Button from '../../common/Button/Button';

const StickyBar = () => (
  <div className={styles.component}>
    <p>Tu będą się generowały zdjęcia wybranych produktów. Tylko jak to zrobić? :| </p>
    <Button>Compare</Button>
  </div>
);

export default StickyBar;
