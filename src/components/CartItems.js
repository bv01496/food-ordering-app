import React,{useContext} from 'react'
import {Cart} from "./CartProvider"

const CartItems = () => {
  const cart_ctx = useContext(Cart)
  return (
    <div className="cart-container">
      <span><box-icon name='cart-alt' size="md" color="white"></box-icon> </span>
      <span style={{paddingTop:"5px"}}>Your Cart </span> 
      <span style={{paddingTop:"5px"}} className="item-num">{cart_ctx.cart.totalItems}</span>
    </div>
  )
}

export default CartItems
