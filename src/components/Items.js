import React,{useContext,useState,useEffect} from 'react'
// import Products from "./productsArray"
import {Cart_ctx} from "../App"
import "boxicons"
const Item = ({product}) => {
  console.log(product);
  const cart_ctx = useContext(Cart_ctx)
  const [addItem,setAddItem] = useState(1)

  useEffect(()=>{

  })
  const handleclick=()=>{
    // cart_ctx.setCartItemCount((prev)=>prev+addItem)
    cart_ctx.setCartItems((pre)=>{
      pre.push(product)
    })
    console.log(product);
    setAddItem(1)
    console.log(cart_ctx.cartItems);
  }
  return (
    <>
      {
        <div className="item">
          <div className="item-info">
          <h2>{product.name}</h2>
          <p style={{fontWeight:900, color:"orange"}}>{product.price}</p>
          <i>{product.discription}</i>
          </div>
          <div className="add-cart">
          <label htmlFor="qty"> Qty :</label>
          <input id="qty" type="number" value={addItem} onChange={(e)=>setAddItem(parseInt(e.target.value))}  min="1" max="5"/><br/>
          <button className="button" onClick={handleclick}> ADD </button>
          </div>
        </div>
      }
    </>
  )
}

export default Item
