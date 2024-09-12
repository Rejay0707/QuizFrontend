import { configureStore } from '@reduxjs/toolkit'
import PlayerNameSliceReducer from './Slices/PlayersNameSlice.js'
import Player2NameSliceReducer from './Slices/Player2NameSlice.js'
import CategoryIDSliceReducer from './Slices/CategoryIDSlice.js'

const store=configureStore({
    reducer:{
        playerName:PlayerNameSliceReducer,
        player2Name:Player2NameSliceReducer,
        id:CategoryIDSliceReducer
    }
})

export default store