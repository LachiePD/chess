import Cell from "./Cell";

const Row = ({ row, index }) => {
  console.log(row);
  return (
    <div className="grid grid-cols-9 gap-2">
      <div>{index + 1}</div>
      {row.map((cell, cellIndex) => (
        <Cell cell={cell} />
      ))}
    </div>
  );
};

export default Row;
