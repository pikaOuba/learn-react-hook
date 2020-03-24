import React, { createContext } from 'react'
import axios from 'axios'
import { CountReducer } from './Count'

export const AppContext = createContext()
const { Provider } = AppContext

function Store(props) {
  const { book, addAction } = CountReducer()


  console.log(fetch(axios))
  return (<Provider value={{book, addAction}}>
    {props.children}
  </Provider>)

}

const fetch = (apiClient) => {
  return ({dispatch, getState}) => {
    return (next) => {
      return (action) => {
        if (typeof action === 'function') {
          return action(dispatch, getState)
        }
  
        const { promise, types, ...rest } = action
        if (!promise) {
          return next(action)
        }
  
        const [REQUEST, SUCCESS, FAILURE] = types
        next({...rest, type: REQUEST})
        const actionPromise = promise(apiClient)
        actionPromise.then(response => {
          next({...rest, payload: response.payload, type: SUCCESS})
        }).catch(error => {
          next({...rest, error, type: FAILURE})
        })
        return actionPromise
      }
    }
  }
}

export default Store
