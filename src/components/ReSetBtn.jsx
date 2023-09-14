import "../assets/style/button.css";
import { useDispatch } from "react-redux";
import { reSetGame } from "../redux/reducer/gameReducer";
function ReSetBtn() {
  const dispatch = useDispatch();
  const hundleReset = () => {
    dispatch(reSetGame());
  };
  return (
    <button className="btn reset" onClick={hundleReset}>
      Reset
    </button>
  );
}

export default ReSetBtn;
