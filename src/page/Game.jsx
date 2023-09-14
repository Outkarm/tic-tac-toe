import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { won, reSetGame } from "../redux/reducer/gameReducer";
import ScoreBoard from "../components/Scoreboard";
import Board from "../components/Board";
import ReSetBtn from "../components/ReSetBtn";
import NewGameBtn from "../components/NewGameBtn";
import DeclareWinner from "../components/DeclareWinner";
import "../assets/style/game.css";

const Game = () => {
  const game = useSelector((state) => state.game);
  const btns = game.gameBoard;
  const dispatch = useDispatch();
  let winningPlayer;
  let gameWon = false;
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
          winningPlayer = "p1";
        } else {
          winningPlayer = "p2";
        }
        setTimeout(() => {
          dispatch(won(winningPlayer));
        }, 200);
      }
    }
    if (btns.includes(null) === false) {
      winningPlayer = "draw";
      setShowWinner(true);
      setTimeout(() => {
        dispatch(reSetGame());
        setShowWinner(false);
      }, 200);
    }
  };
  if (game["p1"].score === game.scoreLimit && game.scoreLimit !== "Unlimited") {
    gameWon = true;
  } else if (
    game["p2"].score === game.scoreLimit &&
    game.scoreLimit !== "Unlimited"
  ) {
    gameWon = true;
  } else {
    gameWon = false;
  }

  useEffect(() => {
    checkWinner(btns);
  }, [btns, game, dispatch]);

  return (
    <>
      <div className={`game ${gameWon ? "blurred" : ""}`}>
        <ScoreBoard />
        <Board bord={btns} />
        <ReSetBtn />
        <NewGameBtn />
      </div>
      <DeclareWinner />
    </>
  );
};

export default Game;
