import React,{useContext} from 'react'
import useInput from "./hooks/custom_hook"
import {Cart} from "./CartProvider"

const Checkout = ({setModalOpen,open,setOpen}) => {
  const{empty:fnameEmpty,setEmpty:setFnameEmpty,hasError:fnameHasError,entredValue:fname,inputTouched:fnameTouched,isValied:fnameIsValied,valueChangeHandler:fnameChange,reset:fnameReset} = useInput(value=> value.length>2 || value.length ==0)
  const{empty:lanameEmpty,setEmpty:setlanameEmpty,hasError:lanameHasError,entredValue:laname,inputTouched:lanameTouched,isValied:lanameIsValied,valueChangeHandler:lanameChange,reset:lnameReset} = useInput(value=>value.length>0)
  const{empty:emailEmpty,setEmpty:setemailEmpty,hasError:emailHasError,entredValue:email,inputTouched:emailTouched,isValied:emailIsValied,valueChangeHandler:emailChange,reset:emailReset} = useInput(value=>(value.length>3&&value.includes("@"))||value.length==0)
  const{empty:cityEmpty,setEmpty:setcityEmpty,hasError:cityHasError,entredValue:city,inputTouched:cityTouched,isValied:cityIsValied,valueChangeHandler:cityChange,reset:cityReset} = useInput(value=>value.length>4 || value.length ==0)
  const{empty:streetEmpty,setEmpty:setstreetEmpty,hasError:streetHasError,entredValue:street,inputTouched:streetTouched,isValied:streetIsValied,valueChangeHandler:streetChange,reset:streetReset} = useInput(value=>value.length>4 || value.length ==0)
  const{empty:pincodeEmpty,setEmpty:setpincodeEmpty,hasError:pincodeHasError,entredValue:pincode,inputTouched:pincodeTouched,isValied:pincodeIsValied,valueChangeHandler:pincodeChange,reset:pincodeReset} = useInput(value=>value.length==6 || value.length ==0)
  
  const cxt = useContext(Cart)
  const checkState=(state,setstate)=>{
    if(state.length === 0){
      setstate(true)
    }else{setstate(false)}
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    checkState(fname,setFnameEmpty)
    checkState(laname,setlanameEmpty)
    checkState(email,setemailEmpty)
    checkState(city,setcityEmpty)
    checkState(street,setstreetEmpty)
    checkState(pincode,setpincodeEmpty)
  }
  const order = ()=>{
    setModalOpen(false)
    cxt.order()
    setOpen(false)
  }
  const formValied = !fnameHasError&&!lanameHasError&&!emailHasError&&!cityHasError&&!streetHasError&&!pincodeHasError
  return (
    <div className={`checkout-container ${open ? "open" : "close"}  `}>
      <form id="check-form" className={`checkout-form ${open ? "open" : "close"}`} onSubmit={handleSubmit}>
      <label htmlFor="fname">First Name</label>
      <input className={fnameIsValied?"": "input-error"} onChange={fnameChange} value={fname} type="text" id="fname"/>
      {fnameEmpty&&<p className="error-text">first name cannot be empty</p>}
      {fnameIsValied||<p className="error-text">first name should atleast 3 charector long</p>}
      <label  htmlFor="lname">last Name</label>
      <input  onChange={lanameChange} value={laname} type="text" id="lname"/>
      {lanameEmpty&&<p className="error-text">last name cannot be empty</p>}
      <label htmlFor="email">email</label>
      <input className={emailIsValied ?"": "input-error"} onChange={emailChange} type="text" id="email"/>
      {emailEmpty&&<p className="error-text">email name cannot be empty</p>}
      <label htmlFor="city">city</label>
      <input className={cityIsValied?"":"input-error"} onChange={cityChange} type="text" id="city"/>
      {cityEmpty&&<p className="error-text">city cannot be empty</p>}
      {cityIsValied||<p className="error-text">enter proper city name</p>}
      <label htmlFor="street">street</label>
      <input className={streetIsValied?"":"input-error"} onChange={streetChange} type="text" id="street"/>
      {streetEmpty&&<p className="error-text">street cannot be empty</p>}
      <label  htmlFor="pin-code">pin-code</label>
      <input className={pincodeIsValied?"":"input-error"} onChange={pincodeChange} type="text" id="pin-code"/>
      {pincodeEmpty&&<p className="error-text">pincode cannot be empty</p>}
      {pincodeIsValied||<p className="error-text">pincode should contain 6 numbers</p>}
      </form>
      <div className="modal-buttons">
        <button onClick={()=>setOpen(false)} style={{backgroundColor:"transparent" ,color:"brown",border:"1px solid brown"}}  className="button">cancle</button>
        <button type="submit" form="check-form" className={`button ${formValied||"disabled"}`} disabled={formValied?false:true} onClick={order} >order</button>
      </div>
    </div>
  )
}

export default Checkout
