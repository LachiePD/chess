class GameState {
  constructor(board) {
    this.board = board;
    this.clickedCoordinates = [];
  }
  //TODO, need to send 'all possible moves' from first clicked coordinate
  setClickedCoordinates(coordinate) {
    try {
      console.log(coordinate);
      if (this.clickedCoordinates.length === 2) {
        this.changeBoard(this.clickedCoordinates);
        this.clickedCoordinates = [];
      }
      this.clickedCoordinates.push(coordinate);
    } catch (e) {
      console.error(e);
    }
  }

  deleteBoard() {
    this.board = [];
  }
  getBoard() {
    return this.board;
  }

  changeBoard(clickedCoordinates) {
    let firstCoord = clickedCoordinates[0];
    let secondCoord = clickedCoordinates[1];
    let newBoard = [...this.board];
    newBoard[firstCoord.yCoordinate][firstCoord.xCoordinate] = "";
    newBoard[secondCoord.yCoordinate][secondCoord.xCoordinate] =
      this.board[firstCoord.yCoordinate][secondCoord.xCoordinate];
    this.board = newBoard;
  }

  setBoard(newBoard) {
    this.board = newBoard;
    console.log("new board made");
  }
}

export default GameState;
