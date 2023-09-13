import { useSelector } from "react-redux";
import "../assets/style/scoreBoard.css";

const ScoreBoard = () => {
  const game = useSelector((state) => state.game);
  const currentPlayer = game.currentPlayer;
  let xplaying;
  if (currentPlayer === "p1") {
    xplaying = true;
  } else {
    xplaying = false;
  }

  return (
    <div className="scoreBoard">
      <span className={`score p1 ${!xplaying && "inactive"}`}>
        {game["p1"].name}
        <br />
        {game["p1"].score}
      </span>
      <span className={`score p2 ${xplaying && "inactive"}`}>
        {game["p2"].name}
        <br />
        {game["p2"].score}
      </span>
    </div>
  );
};

export default ScoreBoard;
