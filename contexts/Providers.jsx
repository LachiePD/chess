"use client";
import { useContext, useState} from "react";
import {GameContext} from './Context.jsx';
import GameState from './GameState.jsx';
import {startingBoard} from '../data/startingBoard.jsx';
const Providers = ({ children }) => {

	const [gameState, setGameState] = useState(new GameState(startingBoard));
  return (
    <GameContext.Provider
      value={{gameState, setGameState}}
    >
      {children}
    </GameContext.Provider>
  );
};

export default Providers;
