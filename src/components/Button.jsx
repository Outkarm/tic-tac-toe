import "../assets/style/button.css";
import { played } from "../redux/reducer/gameReducer";
import { useDispatch } from "react-redux";

function Button({ value, id }) {
  const dispatch = useDispatch();

  const handlePlayed = () => {
    dispatch(played(id));
  };

  const style = value === "X" ? "game-btn x" : "game-btn o";

  return (
    <button className={style} id={id} onClick={handlePlayed}>
      {value}
    </button>
  );
}

export default Button;
