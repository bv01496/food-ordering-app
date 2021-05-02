import React,{useReducer, createContext} from 'react'

const cartReducer=(state,action)=>{
  if(action.type === "ADD"){
    const index = state.items.findIndex((item)=> item.id === action.item.id)
    if(index === -1){
      state.items = [...state.items,{...action.item,count:action.number}]
      state.totalItems += action.number
      state.totalprice += action.number * action.item.price
      return {...state}
    }else{
      state.items[index].count += action.number
      state.totalItems += action.number
      state.totalprice += action.number * action.item.price
      return {...state}
    }
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
      console.log(state.items);
      return {...state}
    }
  }
}
const cartInit = {
  items: [],
  totalprice : 0,
  totalItems : 0
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

  return (
    <Cart.Provider value={{cart,addItems,removeItems}}>
      {props.children}
    </Cart.Provider>
  )
}

export default CartProvider
export {Cart}
