import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NewGameBtn from "./NewGameBtn";
import "../assets/style/declareWinner.css";
import winnerICON from "../assets/images/giphy.gif";

function DeclareWinner() {
  const game = useSelector((state) => state.game);
  const p1 = game.p1;
  const p2 = game.p2;
  const scoreLimit = game.scoreLimit;
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    if (p1.score === scoreLimit && scoreLimit !== "Unlimited") {
      setTimeout(() => {
        setWinner(true);
      }, 100);
    } else if (p2.score === scoreLimit && scoreLimit !== "Unlimited") {
      setTimeout(() => {
        setWinner(true);
      }, 100);
    }
  }, [p1.score, p2.score, scoreLimit]);

  if (
    (p1.score === scoreLimit || p2.score === scoreLimit) &&
    scoreLimit !== "Unlimited"
  ) {
    const winningPlayer = p1.score === scoreLimit ? p1 : p2;

    return (
      <div className={`winner-cont ${winner ? "yeyyy" : ""}`}>
        <p className="congratulations">
          🎉 Congratulations! 🏆
          <br />
          <span className="winner-name">{winningPlayer.name}</span> wins! 🥳
        </p>
        <div className="winner-img">
          <img src={winnerICON} alt="Winning Image" />
        </div>
        <NewGameBtn />
      </div>
    );
  } else {
    return null;
  }
}

export default DeclareWinner;
