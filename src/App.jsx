import Board from "./components/Board";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { won, reSetGame } from "./redux/reducer/gameReducer";
import { useEffect } from "react";
import ScoreBoard from "./components/Scoreboard";
import ReSetBtn from "./components/reSetBtn";

function App() {
  const game = useSelector((state) => state.game);
  console.log(game);
  const btns = game.gameBoard;
  const dispatch = useDispatch();
  let winningPlayer;
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkWinner = (btns) => {
    for (let i = 0; i < winningConditions.length; i++) {
      const [x, y, z] = winningConditions[i];
      if (btns[x] && btns[x] === btns[y] && btns[y] === btns[z]) {
        if (btns[x] === game["p1"].value) {
          console.log(game["p1"].name + " won");
          winningPlayer = "p1";
          dispatch(won(winningPlayer));
        } else {
          console.log(game["p2"].name + " won");
          winningPlayer = "p2";
          dispatch(won(winningPlayer));
        }
      }
    }
  };
  if (btns.includes(null) === false) {
    winningPlayer = "draw";
    dispatch(reSetGame());
  }

  useEffect(() => {
    // Use the game object from useSelector here
    console.log(game);
  }, [game]);
  checkWinner(btns);

  return (
    <div className="app">
      <ScoreBoard />
      <Board bord={btns} />
      <ReSetBtn />
    </div>
  );
}

export default App;
