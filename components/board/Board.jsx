"use client";

import { useEffect, useState, useContext } from "react";
import { GameContext } from "../../contexts/Context";
import Cell from "./Cell";
import Piece from "../pieces/Piece";
const Board = () => {
  let { gameState, setGameState } = useContext(GameContext);

  const createPiece = (pieceProperties) => {
    return <Piece properties={pieceProperties} />;
  };

  const createBoard = () => {
    let boardInfo = gameState.getBoard();
    return boardInfo.map((row, index) => mapRow(row, index));
  };

  const mapRow = (row, rowNumber) => {
    return row.map((pieceProperties, index) => {
      let coordinates = { x: index, y: rowNumber };
      let piece = createPiece({ ...pieceProperties, ...coordinates });
      return <Cell coords={coordinates}>{piece}</Cell>;
    });
  };

  return <div className="grid grid-cols-8 grid-rows-8 ">{createBoard()}</div>;
};

export default Board;
