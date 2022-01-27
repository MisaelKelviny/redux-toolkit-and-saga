import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import catsReducers from './Redux/catState'
import catSaga from './Saga/catSaga'

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducers
  },
  middleware: [saga]
})

saga.run(catSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
