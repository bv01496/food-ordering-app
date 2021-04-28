import React from 'react'

const Modal = ({modalOpen,cartItems}) => {
  console.log(cartItems);
  if (!modalOpen) return null
  return (
    <div className="overlay">
      <div className="cart-modal">
        <h1>YOUR CART</h1>
        {/* {cartItems.map((item)=>{
          return(
            <div>{item}</div>
          )
        })} */}
      </div>
    </div>
  )
}

export default Modal
