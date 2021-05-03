import CartItems from "./CartItems"

const NavBar = ({setModalOpen}) => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="logo">ReactMeals</li>
          <button className="cart-items" onClick={()=>setModalOpen(true)}><CartItems/></button>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
