import React,{useReducer, createContext} from 'react'

const cartReducer=(state,action)=>{
  if(action.type === "ADD"){
    const index = state.items.findIndex((item)=> item.id === action.item.id)
    if(index === -1){
      state.items = [...state.items,{...action.item,count:action.number}]
      state.totalItems += action.number
      state.totalprice += action.number * action.item.price
      return {...state}
    }else if(state.items[index].count < 5){
      let sub = action.number
      if((state.items[index].count +  action.number)>5){
        sub = (5-state.items[index].count)
      }
      state.items[index].count += (sub)
      state.totalItems += (sub)
      state.totalprice += (sub) * action.item.price
      return {...state}
    }
    return {...state}
  }else if(action.type === "REMOVE"){
    const removeIndex = state.items.findIndex(item => item.id === action.id)
    if(state.items[removeIndex].count > 1 ){
      state.items[removeIndex].count -= 1
      state.totalprice -= state.items[removeIndex].price
      state.totalItems -= 1
      return {...state}
    }else if(state.items[removeIndex].count === 1){
      state.totalprice -= state.items[removeIndex].price
      state.totalItems -= 1
      state.items.splice(removeIndex,1)
      return {...state}
    }
  }else if(action.type === "ORDER"){
    state.items = []
    state.totalItems = 0
    state.totalprice = 0
    state.order_conformed = true
    return {...state}
  }
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
