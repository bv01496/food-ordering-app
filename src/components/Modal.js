import React,{useContext,useState} from 'react'
import {Cart} from "./CartProvider"
import Empty from "../images/box.png"
import ReactDOM from "react-dom"
import Checkout from "./checkout"


const Modal = ({modalOpen,setModalOpen}) => {
  const [checkoutOpen,setCheckoutOpen] = useState(false)
  const cart_ctx = useContext(Cart)
  console.log(cart_ctx.cart.items)
  const handleClick =()=>{
    setCheckoutOpen(true);
  }

  if (!modalOpen) return null
  return ReactDOM.createPortal(
    <div className="overlay" >
      <div className="cart-modal">
        {cart_ctx.cart.items.length >0 || (
          <>
          <img className="empty-cart" src={Empty} alt="your cart is empty"/>
          <h2 className="empty-cart-title"> YOUR CART IS EMPTY...</h2>
          </>
        )}
        {
        cart_ctx.cart.items.map((item)=>{
          return(
            <>
            <div key={item.id} className="modal-item-container">
            <div className="modal-item-info">
              <h3 className="modal-item-name">{item.name}</h3> <br/>
            <span className="modal-item-price">$ {item.price}</span>
            <span className="modal-item-qty">{item.count} x</span>
              </div>
              <div className="controls">
                <button onClick={cart_ctx.addItems.bind(null, item,1)} className="qty-controls " type="submit"><box-icon name='plus'></box-icon></button>
                <button onClick={cart_ctx.removeItems.bind(null, item.id)} className="qty-controls " type="submit"><box-icon name='minus'></box-icon></button>
              </div>
            </div>
            </>
          )
        })}
        {cart_ctx.cart.items.length > 0 && (<div className="summary">
          <span className="total-items">total Items :{cart_ctx.cart.totalItems}</span>
          <span className="total-price"> total :  ${cart_ctx.cart.totalprice}</span>
        </div>)}
        <div className={`modal-buttons ${checkoutOpen && "disappear"}`}>
        <button style={{backgroundColor:"transparent" ,color:"brown",border:"1px solid brown"}} onClick={()=>setModalOpen(false)} className="button">close</button>
        {cart_ctx.cart.items.length > 0 &&(<button className="button" onClick={handleClick}>checkout</button>)}
        </div>
        {<Checkout setModalOpen={setModalOpen}  open={checkoutOpen} setOpen={setCheckoutOpen}/>}
      </div>
    </div>,document.getElementById("portal"))
}

export default Modal
