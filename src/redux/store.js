import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducer/gameReducer";

export default configureStore({ reducer: { game: gameReducer } });
