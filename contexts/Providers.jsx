"use client";
import {createContext,  useContext, useState} from "react";
import GameState from './GameState.jsx';
import {startingBoard} from '../data/startingBoard.jsx';

export const GameContext = createContext();
export const Providers = ({ children }) => {

	const [gameState, setGameState] = useState(new GameState(startingBoard));
  return (
    <GameContext.Provider
      value={{gameState, setGameState}}
    >
      {children}
    </GameContext.Provider>
  );
};

