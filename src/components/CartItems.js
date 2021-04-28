import React,{useContext} from 'react'
import {Cart_ctx} from "../App"

const CartItems = () => {
  const cart_ctx = useContext(Cart_ctx)
  // console.log(cart_ctx);
  return (
    <div className="cart-container">
      <span><box-icon name='cart-alt' size="md" color="white"></box-icon> </span>
       <span style={{paddingTop:"5px"}}>Your Cart </span> 
      <span style={{paddingTop:"5px"}} className="item-num">{cart_ctx.cartItemCount}</span>
    </div>
  )
}

export default CartItems
