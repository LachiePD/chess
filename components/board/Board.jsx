"use client";

import { useEffect, useState, useContext } from "react";
import { GameContext } from "../../contexts/Providers";
import Cell from "./Cell";
import Piece from "./Piece";
const Board = () => {
  let { gameState, setGameState } = useContext(GameContext);

  let [board, setBoard] = useState([]);

  useEffect(() => {
    let newBoard = gameState.getBoard();
    setBoard(newBoard);
  }, [gameState]);

  const createBoard = () => {
    return board.map((row, index) => mapRow(row, index));
  };

  const mapRow = (row, rowNumber) => {
    return row.map((pieceProperties, index) => {
      let coordinates = { x: index, y: rowNumber };
      let piece = createPiece({ ...pieceProperties, ...coordinates });
      return (
        <Cell  coords={coordinates}>
          {piece}
        </Cell>
      );
    });
  };
  const createPiece = (pieceProperties) => {
    return <Piece properties={pieceProperties} />;
  };

  return <div className="grid grid-cols-8 grid-rows-8 ">{createBoard()}</div>;
};

export default Board;
