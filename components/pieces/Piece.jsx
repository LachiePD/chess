const Piece = ({properties}) =>{

	const piece = properties.piece;
	const color = properties.color;
	const xCoordinate = properties.x;
	const yCoordinate = properties.y;

	const imagePath = `./images/${color}_${piece}.png`
	return (
<div>
		<img src={imagePath}/>
		{piece}
		{color}
		</div>

	);


}

export default Piece;
