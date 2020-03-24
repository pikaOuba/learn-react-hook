import { useReducer } from "react"

const COUNT_ADD = 'COUNT_ADD'
const GET_LIST = 'GET_LIST'
const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS'
const GET_LIST_FAILURE = 'GET_LIST_FAILURE'


const initial = {list: [], count: 1}
export const CountReducer = () =>  {
  const [book, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case COUNT_ADD:
        return {
          ...state,
          count: state.count + 1
        }
      case GET_LIST_SUCCESS:
          return {
            ...state,
            list1: action
          }
      default:
        return {
          ...state
        }
    }
  }, initial)


  const addAction = () => {
    dispatch({
      type: COUNT_ADD
    })
  }


  return { book, addAction }
}

export const getList = () => {
  return {
    types: [GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILURE],
    promise: (apiClient) => apiClient.get('/api/common/iouConfig')
  }
}

// export const addAction = () => {
//   return {
//     type: COUNT_ADD
//   }
// }