import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerName: null,
};

const PlayerNameSlice = createSlice({
  name: "playerName",
  initialState,
  reducers: {
    setPlayerName: (state, action) => {
      state.playerName = action.payload;
    },
  },
});

export const { setPlayerName } = PlayerNameSlice.actions;

export default PlayerNameSlice.reducer;
