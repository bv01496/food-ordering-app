import React,{useContext,useState,useEffect} from 'react'
import {Cart_ctx} from "../App"
import "boxicons"
import {Cart} from "./CartProvider"

const Item = ({product}) => {
  const cart_ctx = useContext(Cart)
  const [addItem,setAddItem] = useState(1)

  const handleclick=()=>{
    cart_ctx.addItems(product,addItem)
    setAddItem(1)
  }
  return (
    <>
      {
        <div className="item">
          <div className="item-info">
          <h2>{product.name}</h2>
          <p style={{fontWeight:900, color:"orange"}}>$ {product.price}</p>
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
