// actions.js
export const NEW_GAME = "NEW_GAME";
export const START_GAME = "START_GAME";
export const RESET_GAME = "RESET_GAME";
export const PLAYED = "PLAYED";
export const WON = "WON";

// action creators
export const newGame = () => ({ type: NEW_GAME });

export const startGame = (p1Name, p2Name, scoreLimit) => ({
  type: START_GAME,
  payload: { p1Name, p2Name, scoreLimit },
});

export const resetGame = () => ({ type: RESET_GAME });

export const played = (index) => ({
  type: PLAYED,
  payload: { index },
});

export const won = (winningPlayer) => ({
  type: WON,
  payload: winningPlayer,
});

// reducer.js
const initialState = {
  gameBoard: Array(9).fill(null),
  p1: { name: "Player 1", value: "X", score: 0 },
  p2: { name: "Player 2", value: "O", score: 0 },
  scoreLimit: "Unlimited",
  win: false,
  currentPlayer: "p1",
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return { ...initialState };

    case START_GAME:
      const { p1Name, p2Name, scoreLimit } = action.payload;
      return {
        ...state,
        p1: { ...state.p1, name: p1Name, score: 0 },
        p2: { ...state.p2, name: p2Name, score: 0 },
        scoreLimit,
      };

    case RESET_GAME:
      return {
        ...initialState,
        scoreLimit: state.scoreLimit,
        p1: state.p1,
        p2: state.p2,
      };

    case PLAYED:
      const { index } = action.payload;
      if (state.gameBoard[index] === null) {
        const updatedGameBoard = [...state.gameBoard];
        updatedGameBoard[index] = state[state.currentPlayer].value;
        const nextPlayer = state.currentPlayer === "p1" ? "p2" : "p1";
        return {
          ...state,
          gameBoard: updatedGameBoard,
          currentPlayer: nextPlayer,
        };
      }
      return state;

    case WON:
      const winningPlayer = action.payload;
      const updatedScore = {
        ...state[winningPlayer],
        score: state[winningPlayer].score + 1,
      };
      return {
        ...state,
        gameBoard: Array(9).fill(null),
        [winningPlayer]: updatedScore,
        currentPlayer: "p1",
        win: true,
      };

    default:
      return state;
  }
}

export default gameReducer;
