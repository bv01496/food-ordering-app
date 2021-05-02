import React,{useState,useRef,useEffect,createContext,useReducer} from 'react'
import "./App.css"
import "boxicons"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Modal from "./components/Modal"
import ReactDOM from "react-dom"

const Cart_ctx = createContext()
const App = () => {
  const[cartItemCount,setCartItemCount] = useState(0)
  const[modalOpen,setModalOpen] = useState(false)
  const[cartItems,setCartItems] = useState([])
  const[totalCost,setTotalCost] = useState([0])


  return (
    <>
     <Cart_ctx.Provider 
        value={{cartItemCount,
                setCartItemCount,
                modalOpen,
                setModalOpen,cartItems,setCartItems}}>
      <NavBar/>
      <Main cartItems={cartItems}/>
      {/* {ReactDOM.create} */}
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
     </Cart_ctx.Provider >
    </>
  )
}

export default App
export {Cart_ctx}

