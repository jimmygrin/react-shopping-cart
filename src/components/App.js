import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import Main from './main'
import store from '../redux/store'
import Checkout from './Checkout'




export default props => {
  return (
    <Provider store={store}>
      <div id="container">
        <Main />
        <Checkout />
      </div>
   </Provider>
  )
}