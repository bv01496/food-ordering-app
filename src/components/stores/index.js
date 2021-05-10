import {createStore} from "redux"

const reducer =(state = {counter:4},action)=>{
  if(action.type == "increment"){
    return {counter : state.counter + 1}
  }else if (action.type == "decrement"){
    return {counter : state.counter - 1}
  }
  return state
}
const store = createStore(reducer)

export default store