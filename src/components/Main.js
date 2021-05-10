import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import Item from "./Items"
import Products from "./productsArray"
import Order_message from "./order_message"

const Main = ({modalOpen}) => {
  const counter =  useSelector(state=>state.counter)
  const dispatch = useDispatch();
  const[classes,setClasses] = useState("")
  useEffect(()=>{
    modalOpen? setClasses("bump"):setClasses("")
  },[modalOpen]) 
  const increment=()=>{
    dispatch({type:"increment"});
  }
  const decrement=()=>{
    dispatch({type:""});
  }
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
    <div className="pp">
    <h1>{counter}</h1>
    <button type="submit" onClick={increment}>incre</button>
    <button type="submit" onClick={decrement}>decre</button>
    </div>
    <Order_message/>
    </>
  )
}

export default Main
