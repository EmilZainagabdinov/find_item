import React from 'react';
import './FieldUnit.css';

const FieldUnit = props => {
  const fieldClasses = ["FieldUnit"];
  let treasure = null;

  if (props.treasure) {
    treasure = (
        <div className="Treasure">¢</div>
    );
  }

  if (props.clickStatus) {
    fieldClasses.push("FieldUnit_clicked");
  }

  return (
      <div className={fieldClasses.join(" ")} onClick={props.onUnitClick}>
        {treasure}
      </div>
  );
};

export default FieldUnit;