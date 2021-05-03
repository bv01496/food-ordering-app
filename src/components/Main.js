import React from 'react'
import Item from "./Items"
import Products from "./productsArray"

const Main = () => {
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
    <div className="items-container ">
      {Products.map((product)=><Item key={product.id} product={product}/>)}
    </div>
    </>
  )
}

export default Main
