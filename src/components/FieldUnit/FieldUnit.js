import React from 'react';

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