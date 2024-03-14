const Cell = ({ piece, coords, children }) => {
  return (
    <div className="border h-20 text-center">
      <div>{children}</div>
    </div>
  );
};

export default Cell;
