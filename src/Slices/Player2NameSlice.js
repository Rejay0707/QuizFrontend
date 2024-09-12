import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player2Name: null,
};

const Player2NameSlice = createSlice({
  name: "player2Name",
  initialState,
  reducers: {
    setPlayer2Name: (state, action) => {
      state.player2Name = action.payload;
    },
  },
});

export const { setPlayerName, setPlayer2Name } = Player2NameSlice.actions;

export default Player2NameSlice.reducer;
