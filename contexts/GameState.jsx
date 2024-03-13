class GameState {
  constructor(board) {
    this.board = board;
	  this.clickedCoordinates = [];
  }

	setClickedCoordinates(coordinate){
		if(clickedCoordinates.length === 2){

			clickedCoordinates = [];
		}

		clickedCoordinates.push(coordinate);



	}
	getBoard(){
		return(this.board);
	}
}

export default GameState;
