// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import ReactDOM from 'react-dom'
import AppView from './src/app-view'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {appReducer} from './src/app-reducers'
import thunk from 'redux-thunk'

const store = createStore(appReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <AppView />
  </Provider>
  ,(document.getElementById('App'))
)