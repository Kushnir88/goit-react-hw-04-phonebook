import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="filterInput" className={styles.label}>
        Filter contacts by name:
      </label>
      <input
        type="text"
        id="filterInput"
        value={filter}
        onChange={onFilterChange}
        className={styles.input}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
