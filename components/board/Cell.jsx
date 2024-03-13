import { useState } from "react";
const Cell = ({ piece, coords, children }) => {
  const [clicked, setClicked] = useState(false);


	const decideColor = () =>{

		return clicked ? 'green' : '';
		}
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div
      style={{ backgroundColor: decideColor()}}
      className="border h-20 text-center"
      onClick={handleClick}
    >
      <div>
        coords:{coords.x} {coords.y}
      </div>
	  <div>{children}</div>
    </div>
  );
};

export default Cell;
