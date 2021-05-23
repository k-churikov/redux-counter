import { DECREMENT, INCREMENT, CHENGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from "./types";

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function asyncIncrement() {
  return dispatch => {
    dispatch(disableButtons())
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment())
      dispatch(enableButtons())
    }, 2000)
  }
}

export function chengeTheme(newTheme) {
  return {
    type: CHENGE_THEME,
    payload: newTheme
  }
}

export function disableButtons() {
  return {
    type: DISABLE_BUTTONS
  }
}

export function enableButtons() {
  return {
    type: ENABLE_BUTTONS
  }
}