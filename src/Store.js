import { configureStore } from "@reduxjs/toolkit";
import PlayerNameSliceReducer from "./Slices/PlayersNameSlice.js";
import Player2NameSliceReducer from "./Slices/Player2NameSlice.js";
import CategoryIDSliceReducer from "./Slices/CategoryIDSlice.js";
import Player1ScoreSliceReducer from "./Slices/Player1ScoreSlice.js";
import Player2ScoreSliceReducer from "./Slices/Player2ScoreSlice.js";

const store = configureStore({
  reducer: {
    playerName: PlayerNameSliceReducer,
    player2Name: Player2NameSliceReducer,
    id: CategoryIDSliceReducer,
    player1Score: Player1ScoreSliceReducer,
    player2Score: Player2ScoreSliceReducer,
  },
});

export default store;
