import React,{useReducer, createContext} from 'react'

const cartReducer=(state,action)=>{
  if(action.type === "ADD"){
    const index = state.items.findIndex((item)=> item.id === action.item.id)
    if(index === -1){
      return {
        ...state,
        items:[...state.items,{...action.item,count:action.number}],
        totalItems: state.totalItems + action.number,
        totalprice: state.totalprice + action.number *action.item.price
      }
    }else if(state.items[index].count < 5){
      let sub = action.number
      if((state.items[index].count +  action.number)>5){
        sub = (5-state.items[index].count)
      }
      state.items[index].count += (sub)
      return {
        ...state,
        items:[...state.items],
        totalItems: state.totalItems + sub,
        totalprice: state.totalprice + sub *action.item.price
        }
    }
  }else if(action.type === "REMOVE"){
    const removeIndex = state.items.findIndex(item => item.id === action.id)
    if(removeIndex >= 0){
    if(state.items[removeIndex].count > 1 ){
      state.items[removeIndex].count -= 1
      return {
        ...state,
        items:[...state.items],
        totalItems: state.totalItems - 1,
        totalprice: state.totalprice - state.items[removeIndex].price
        }
    }else if(state.items[removeIndex].count === 1){
      const newList = state.items.filter((item,index)=> index!=removeIndex)
      return {
        ...state,
        items:[...newList],
        totalItems: state.totalItems - 1,
        totalprice: state.totalprice - state.items[removeIndex].price,
        }
    }
  }
  }else if(action.type === "ORDER"){
    state.items = []
    state.totalItems = 0
    state.totalprice = 0
    state.order_conformed = true
    return {...state}
  }
  return {...state}
}
const cartInit = {
  items: [],
  totalprice : 0,
  totalItems : 0,
  order_conformed : false
}
const Cart = createContext()
const CartProvider = (props) => {
  const[cart, dispatchCart] = useReducer(cartReducer,cartInit)

  const addItems =(item,number)=>{
    dispatchCart({type: "ADD", item: item, number: number })
  }
  const removeItems =(id)=>{
    dispatchCart({type: "REMOVE", id: id})
  }
  const order =()=>{
    dispatchCart({type: "ORDER"})
  }

  return (
    <Cart.Provider value={{cart,addItems,removeItems,order}}>
      {props.children}
    </Cart.Provider>
  )
}

export default CartProvider
export {Cart}
