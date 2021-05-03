import CartItems from "./CartItems"
import {useEffect,useContext,useState} from "react"
import {Cart} from "./CartProvider"

const NavBar = ({setModalOpen}) => {
  const context = useContext(Cart)
  const[classes,setClasses] = useState("")
  useEffect(()=>{
    setClasses("bump")
    setTimeout(()=>setClasses(""),300)
  },[context.cart.totalItems]) 
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="logo">ReactMeals</li>
          <button className={`cart-items ${classes}`} onClick={()=>setModalOpen(true)}><CartItems/></button>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
