import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { won, resetGame } from "../redux/reducer/gameReducer";
import ScoreBoard from "./ScoreBoard";
import Board from "./Board";
import ReSetBtn from "./ReSetBtn";
import NewGameBtn from "./NewGameBtn";
import DeclareWinner from "./DeclareWinner";
import "../assets/style/game.css";

const Game = () => {
  const game = useSelector((state) => state.game);
  const gameBoard = game.gameBoard;
  const dispatch = useDispatch();

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

  useEffect(() => {
    checkWinner(gameBoard);
  }, [gameBoard, dispatch]);

  const checkWinner = (gameBoard) => {
    let winningPlayer = null;

    for (let i = 0; i < winningConditions.length; i++) {
      const [x, y, z] = winningConditions[i];
      if (
        gameBoard[x] &&
        gameBoard[x] === gameBoard[y] &&
        gameBoard[y] === gameBoard[z]
      ) {
        winningPlayer = gameBoard[x] === game["p1"].value ? "p1" : "p2";
        break;
      }
    }

    if (!winningPlayer && !gameBoard.includes(null)) {
      winningPlayer = "draw";
      setTimeout(() => {
        dispatch(resetGame());
      }, 100);
    }

    if (winningPlayer) {
      setTimeout(() => {
        dispatch(won(winningPlayer));
      }, 200);
    }
  };

  const isGameWon =
    (game["p1"].score === game.scoreLimit && game.scoreLimit !== "Unlimited") ||
    (game["p2"].score === game.scoreLimit && game.scoreLimit !== "Unlimited");

  return (
    <>
      <div className={`game ${isGameWon ? "blurred" : ""}`}>
        <ScoreBoard />
        <Board bord={gameBoard} />
        <ReSetBtn />
        <NewGameBtn />
      </div>
      <DeclareWinner />
    </>
  );
};

export default Game;
