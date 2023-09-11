import { useState } from "react";
import "../assets/style/button.css";
function Button({ value, id }) {
  const [players, setPlayers] = useState({
    p1: { name: "Player 1", value: "x", score: 0 },
    p2: { name: "Player 2", value: "x", score: 0 },
  });

  const style = value === "x" ? "game-btn x" : "game-btn o";

  return (
    <button className={style} id={id}>
      {value}
    </button>
  );
}

export default Button;
