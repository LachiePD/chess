import { useState } from "react";
import {useContext} from 'react';
import {GameContext} from '../../contexts/Providers.jsx';

const Piece = ({ properties }) => {
  const piece = properties.piece;
  const color = properties.color;
  const xCoordinate = properties.x;
  const yCoordinate = properties.y;
  const imagePath = `./images/${color}_${piece}.png`;

  const [clicked, setClicked] = useState(false);
  const {gameState, setGameState} = useContext(GameContext);
  const decideColor = () => {
    return clicked ? "green" : "";
  };

  const handleClick = () => {
    setClicked(!clicked);
	gameState.setClickedCoordinates({xCoordinate, yCoordinate});  
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
