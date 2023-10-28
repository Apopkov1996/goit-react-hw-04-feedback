import React from 'react';
import PropTypes from 'prop-types';
import butcss from './buttons.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback, title }) => {
  return (
    <div className={butcss.wrapper}>
      {options.map(name => (
        <button
          className={butcss.button}
          key={name}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
