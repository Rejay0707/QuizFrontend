import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player1Score: 0,
};

const Player1ScoreSlice = createSlice({
  name: "playerScore",
  initialState,
  reducers: {
    setPlayerOneScore: (state, action) => {
      state.player1Score = action.payload;
    },
  },
});

export const { setPlayerOneScore } = Player1ScoreSlice.actions;

export default Player1ScoreSlice.reducer;
