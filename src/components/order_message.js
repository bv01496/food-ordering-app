import React,{useContext} from 'react'
import {Cart} from "./CartProvider"

const Order_message = () => {
  const cxt = useContext(Cart)
  if(!cxt.cart.order_conformed){return null}
  return (
    <div className="order_conformation">
      <h2>Order Conformation</h2><br/>
      <p>your orders been successfully placed, but dont anticipate any dilivery </p>
    </div>
  )
}

export default Order_message
