import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/welcome.css";
import { startGame } from "../redux/reducer/gameReducer";
function Welcome() {
  const dispatch = useDispatch();
  const [p1Name, setP1Name] = useState("");
  const [p2Name, setP2Name] = useState("");
  (state) => state.game;
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
        <h2 className="players">Players Name</h2>
        <div className="p-info-sec">
          <input
            className="player1"
            type="text"
            onChange={(e) => setP1Name(e.target.value)}
            placeholder={"Player 1"}
          />

          <input
            className="player2"
            type="text"
            onChange={(e) => setP2Name(e.target.value)}
            placeholder={"Player 2"}
          />
        </div>
        <div className="scrolly-sec">
          <h2 className="players">Score Limit</h2>
          <input
            className="scrolly"
            type="range"
            min={1}
            max={11}
            step={1}
            value={scoreLimit === "Unlimited" ? 11 : scoreLimit}
            onChange={(e) =>
              setScoreLimit(
                e.target.value === 11 ? "Unlimited" : parseInt(e.target.value)
              )
            }
          />
          <div className="selected-score-limit">
            {scoreLimit === 11 ? "Unlimited" : scoreLimit}
          </div>
        </div>
      </form>
      <Link to="/game">
        <button className=" start" onClick={handleStartGame}>
          Start Game
        </button>
      </Link>
    </div>
  );
}

export default Welcome;
