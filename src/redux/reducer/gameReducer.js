// actions.js
export const NEW_GAME = "GO_TO_GAME_SETTINGS";
export const START_GAME = "START_GAME";
export const RESET_GAME = "RESET_GAME";
export const PLAYED = "PLAYED";
export const WON = "A_PLAYER_WON";

//action creators
export const newGame = () => ({
  type: NEW_GAME,
});

export const startGame = (p1Name, p2Name, scoreLimit) => ({
  type: START_GAME,
  payload: { p1Name, p2Name, scoreLimit },
});

export const reSetGame = () => ({
  type: RESET_GAME,
});

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
  gameBoard: [null, null, null, null, null, null, null, null, null],
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
      return {
        ...state,
        p1: { ...state.p1, name: action.payload.p1Name },
        p2: { ...state.p2, name: action.payload.p2Name },
        scoreLimit: action.payload.scoreLimit,
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
      const updatedGameBoard = [...state.gameBoard];
      if (updatedGameBoard[index] === null) {
        updatedGameBoard[index] = state[state.currentPlayer].value;
        const nextPlayer = state.currentPlayer === "p1" ? "p2" : "p1";

        return {
          ...state,
          gameBoard: updatedGameBoard,
          currentPlayer: nextPlayer,
        };
      } else {
        return state;
      }

    case WON:
      const winningPlayer = action.payload;
      const updatedScore = {
        ...state[winningPlayer],
        score: state[winningPlayer].score + 1,
      };
      console.log(updatedScore);

      return {
        ...state,
        gameBoard: [null, null, null, null, null, null, null, null, null],
        [winningPlayer]: updatedScore,
        currentPlayer: "p1",
        win: true,
      };

    default:
      return state;
  }
}

export default gameReducer;
