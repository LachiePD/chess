class GameState {
  constructor(board) {
    this.board = board;
    this.clickedCoordinates = [];
  }


  getBoard() {
    return this.board;
  }
setBoard(newBoard){
	this.board = newBoard;
}
  changeBoard(clickedCoordinates) {
    let firstCoord = clickedCoordinates[0];
    let secondCoord = clickedCoordinates[1];
    let newBoard = [...this.board];
    newBoard[firstCoord.yCoordinate][firstCoord.xCoordinate] = "";
    newBoard[secondCoord.yCoordinate][secondCoord.xCoordinate] =
      this.board[firstCoord.yCoordinate][secondCoord.xCoordinate];
    this.setBoard(newBoard);
  }
}

export default GameState;
