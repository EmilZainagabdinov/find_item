import React, {useState} from "react";
import './App.css';
import GameField from "./components/GameField/GameField";
import Button from "./components/Button/Button";

const App = () => {
  const [gameField, setGameField] = useState([]);
  const [showGameField, setShowGameField] = useState(false);

  const createFieldUnits = () => {
    const fieldArray = [];

    for (let i = 1; i <= 36; i++) {
      fieldArray.push({id: "unit" + i, isClicked: false, treasure: false});
    }

    const treasureIndex = Math.floor(Math.random() * 36);
    fieldArray[treasureIndex].treasure = true;

    setGameField(fieldArray);
  };

  const showField = () => {
    setShowGameField(true);
  };

  const unitClick = id => {
    const index = gameField.findIndex(unit => unit.id === id);
    const unitCopy = {...gameField[index]};
    unitCopy.isClicked = true;

    const gameFieldCopy = [...gameField];
    gameFieldCopy[index] = unitCopy;

    setGameField(gameFieldCopy);
  };

  let field = null;

  if (showGameField) {
    field = [
        <GameField gameField={gameField} onUnitClick={unitClick} />,
        // <Button action="Reset" createFieldUnits={createFieldUnits} />
        ];
  }

  return (
    <div className="App">
      <Button action="Start" createFieldUnits={createFieldUnits} showField={showField} />
      {field}
    </div>
  );
}

export default App;
