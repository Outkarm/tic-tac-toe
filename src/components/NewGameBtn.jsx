import { Link } from "react-router-dom";
import "../assets/style/button.css";

function NewGameBtn() {
  return (
    <Link to="/">
      <button className="btn new-game">New Game</button>
    </Link>
  );
}

export default NewGameBtn;
