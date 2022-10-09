import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return options.map( option => {
        return (
            <button 
            key={option}
            onClick={() => onLeaveFeedback(option)}
            className={style.buttonFeedback}
            >
            {option}
            </button>
        )
    })
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };