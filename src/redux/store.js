import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import gameReducer from "./reducer/gameReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, gameReducer);

const store = configureStore({ reducer: { game: persistedReducer } });

const persistor = persistStore(store);
export { store, persistor };
