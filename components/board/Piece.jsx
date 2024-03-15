import { useState } from "react";
import {useContext} from 'react';
import {GameContext} from '../../contexts/Providers.jsx';
import GameState from  '../../contexts/GameState';
import {changeBoard} from '../../contexts/boardChanger';
const Piece = ({ properties }) => {
  const piece = properties.piece;
  const color = properties.color;
  const xCoordinate = properties.x;
  const yCoordinate = properties.y;
const coordinate = {x:xCoordinate, y:yCoordinate};
  const imagePath = `./images/${color}_${piece}.png`;

  const [clicked, setClicked] = useState(false);
  const {gameState, updateGameState} = useContext(GameContext);
  const decideColor = () => {
    return clicked ? "green" : "";
  };

   const handleClick = () => {
    setClicked(!clicked);
	 let  newGameState = new GameState(gameState.getBoard());
	   newGameState.setBoard(changeBoard('a', 'b'));
	   updateGameState(newGameState);
  };


  return (
    <div style={{ backgroundColor: decideColor() }}>
      <img src={imagePath} onClick={handleClick} />
      {piece}
      {color}
    </div>
  );
};

export default Piece;
