import React,{useState,useEffect} from 'react'
import Item from "./Items"
import Products from "./productsArray"
import Order_message from "./order_message"

const Main = ({modalOpen}) => {
  const[classes,setClasses] = useState("")
  useEffect(()=>{
    modalOpen? setClasses("jump"):setClasses("")
  },[modalOpen]) 
  return (
    <>
    <div className="container hero">
      <div className="hero-card">
        <h4>order what you desire</h4>
        <p>delecious ,freshly made dishes and recipes 
        at your door step in minutes</p>
        <p>choose your favorite meal from our broad selecion of
          delecious meal and tasty lunch </p>
      </div>
    </div>
    <div className={`items-container ${classes}`}>
      {Products.map((product)=><Item key={product.id} product={product}/>)}
    </div>
    <Order_message/>
    </>
  )
}

export default Main
