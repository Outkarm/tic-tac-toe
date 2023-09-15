import Button from "./button";
import "../assets/style/board.css";

function Board({ bord }) {
  return (
    <div className="board">
      {bord.map((item, index) => (
        <Button value={item} id={index} key={index} />
      ))}
    </div>
  );
}

export default Board;
