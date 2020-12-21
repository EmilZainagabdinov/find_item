import React from 'react';
import './TriesCounter.css';

const TriesCounter = props => {
  return (
      <p className="TriesCounter">
        {"Tries: " + props.tries}
      </p>
  );
};

export default TriesCounter;