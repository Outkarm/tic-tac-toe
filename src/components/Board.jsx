import Button from "./button";
import "../assets/style/board.css";

function Board({ bord }) {
  console.log("board rendering");
  return (
    <div className="board">
      {bord.map((items, index) => (
        <Button value={items} id={index} key={index} />
      ))}
    </div>
  );
}

export default Board;
