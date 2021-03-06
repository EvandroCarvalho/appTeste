import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers/index'
import Routes from './src/Routes'

export default class App extends Component {

  render() {
    return(
      <Provider
        store ={ createStore(reducers,{},applyMiddleware(ReduxThunk)) }
      >
        <Routes/>
      </Provider>
    )
  }
}
