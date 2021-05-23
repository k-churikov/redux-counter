import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { decrement, increment, asyncIncrement, chengeTheme } from './redux/action'
import './styles.css'

const counter = document.getElementById('counter')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const async = document.getElementById('async')
const theme = document.getElementById('theme')

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

add.addEventListener('click', () => {
  store.dispatch(increment())
})

sub.addEventListener('click', () => {
  store.dispatch(decrement())
})

async.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

theme.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light')
  ? 'dark'
  : 'light'

  store.dispatch(chengeTheme(newTheme))
})

store.subscribe(() => {
  const state = store.getState()

  counter.textContent = state.counter
  document.body.className = state.theme.value;

  [add, sub, async, theme].forEach(btn => btn.disabled = state.theme.disabled)
})

store.dispatch({ type: 'INIT_APP' })