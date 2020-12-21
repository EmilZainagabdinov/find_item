import React from 'react';
import FieldUnit from "../FieldUnit/FieldUnit";
import './GameField.css';

const GameField = props => {
  const fieldUnits = props.gameField.map(unit => (
      <FieldUnit
          key={unit.id}
          treasure={unit.treasure}
          clickStatus={unit.isClicked}
          onUnitClick={() => {props.onUnitClick(unit.id)}}
      />
  ));

  return (
      <div className="GameField">
        {fieldUnits}
      </div>
  );
};

export default GameField;