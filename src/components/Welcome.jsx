import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/style/welcome.css";
import { startGame } from "../redux/reducer/gameReducer";

function Welcome() {
  const dispatch = useDispatch();
  const [p1Name, setP1Name] = useState("");
  const [p2Name, setP2Name] = useState("");
  const [scoreLimit, setScoreLimit] = useState(1);

  const handleStartGame = () => {
    const finalP1Name = p1Name.trim() === "" ? "Player 1" : p1Name;
    const finalP2Name = p2Name.trim() === "" ? "Player 2" : p2Name;

    dispatch(startGame(finalP1Name, finalP2Name, scoreLimit));
  };

  return (
    <div className="welcome-page">
      <h1 className="w-title">Welcome to Tic Tac Toe</h1>
      <form className="user-settings">
        <h2 className="players">Players Names</h2>
        <div className="p-info-sec">
          <input
            id="player1"
            className="player1"
            type="text"
            value={p1Name}
            placeholder="Player 1"
            onChange={(e) => setP1Name(e.target.value)}
          />
          <input
            id="player2"
            className="player2"
            type="text"
            value={p2Name}
            placeholder="Player 2"
            onChange={(e) => setP2Name(e.target.value)}
          />
        </div>
        <div className="scrolly-sec">
          <h2 className="players">Score Limit</h2>
          <input
            className="scrolly"
            type="range"
            id="scoreLimit"
            min={1}
            max={11}
            step={1}
            value={scoreLimit === "Unlimited" ? 11 : scoreLimit}
            onChange={(e) =>
              setScoreLimit(
                e.target.value === "11" ? "Unlimited" : parseInt(e.target.value)
              )
            }
          />
          <div className="selected-score-limit">
            {scoreLimit === "Unlimited" ? "Unlimited" : scoreLimit}
          </div>
        </div>
      </form>
      <Link to="/game">
        <button className="start" onClick={handleStartGame}>
          Start Game
        </button>
      </Link>
    </div>
  );
}

export default Welcome;
