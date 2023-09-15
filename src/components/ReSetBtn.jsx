import "../assets/style/button.css";
import { useDispatch } from "react-redux";
import { resetGame } from "../redux/reducer/gameReducer";

function ReSetBtn() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <button className="btn reset" onClick={handleReset}>
      Reset
    </button>
  );
}

export default ReSetBtn;
