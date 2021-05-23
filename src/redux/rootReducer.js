import { combineReducers } from "redux"
import { DECREMENT, INCREMENT, CHENGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from "./types"

function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT: return ++state 
    case DECREMENT: return --state
    default: return state
  }
}

const initialState = {
  value: 'light',
  disabled: false
}

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case CHENGE_THEME: return {...state, value: action.payload}
    case DISABLE_BUTTONS: return {...state, disabled: true}
    case ENABLE_BUTTONS: return {...state, disabled: false}
    default: return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})