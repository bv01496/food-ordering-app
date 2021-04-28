import React,{useState,useRef,useEffect,createContext,useReducer} from 'react'
import "./App.css"
import "boxicons"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Modal from "./components/Modal"

const Cart_ctx = createContext()
const App = () => {
  const[cartItemCount,setCartItemCount] = useState(0)
  const[modalOpen,setModalOpen] = useState(false)
  const[cartItems,setCartItems] = useState([5,6,4])

  return (
    <>
     <Cart_ctx.Provider 
        value={{cartItemCount,
                setCartItemCount,
                modalOpen,
                setModalOpen,cartItems,setCartItems}}>
      <NavBar/>
      <Main cartItems={cartItems}/>
      <Modal modalOpen={modalOpen} cartItems={cartItems}/>
      {/* {console.log(cartItems)} */}
     </Cart_ctx.Provider >
    </>
  )
}

export default App
export {Cart_ctx}

