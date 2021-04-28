import React,{useContext} from 'react'
import CartItems from "./CartItems"
import {Cart_ctx} from "../App"
const NavBar = () => {
  const cart_ctx = useContext(Cart_ctx)
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="logo">ReactMeals</li>
          <button className="cart-items" onClick={()=>cart_ctx.setModalOpen(true)}><CartItems/></button>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
