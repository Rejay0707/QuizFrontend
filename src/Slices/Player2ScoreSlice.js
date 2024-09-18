import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player2Score: 0,
};

const Player2ScoreSlice = createSlice({
  name: "player2Score",
  initialState,
  reducers: {
    setPlayerTwoScore: (state, action) => {
      state.player2Score = action.payload;
    },
  },
});

export const { setPlayerTwoScore } = Player2ScoreSlice.actions;

export default Player2ScoreSlice.reducer;
