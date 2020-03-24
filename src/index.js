import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/index/App'
import Store from './stores/Index'

ReactDOM.render(
  <Store>
    <App />
  </Store>
  
,
   document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
