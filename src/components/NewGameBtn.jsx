import { Link } from "react-router-dom";
import { resetGame } from "../redux/reducer/gameReducer";
import { useDispatch } from "react-redux";
import "../assets/style/button.css";

function NewGameBtn() {
  const dispatch = useDispatch();

  const handleNewGame = () => {
    dispatch(resetGame());
  };

  return (
    <>
      <Link to="/">
        <button className="btn new-game" onClick={handleNewGame}>
          New Game
        </button>
      </Link>
    </>
  );
}

export default NewGameBtn;
