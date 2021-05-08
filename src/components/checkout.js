import React from 'react'
import useInput from "./hooks/custom_hook"

const Checkout = ({open,setOpen}) => {
  const{empty:fnameEmpty,setEmpty:setFnameEmpty,hasError:fnameHasError,entredValue:fname,inputTouched:fnameTouched,isValied:fnameIsValied,valueChangeHandler:fnameChange,reset:fnameReset} = useInput(value=> value.length>3 || value.length ==0)
  const{empty:lanameEmpty,setEmpty:setlanameEmpty,hasError:lanameHasError,entredValue:laname,inputTouched:lanameTouched,isValied:lanameIsValied,valueChangeHandler:lanameChange,reset:lnameReset} = useInput(value=>value.length>0)
  const{empty:emailEmpty,setEmpty:setemailEmpty,hasError:emailHasError,entredValue:email,inputTouched:emailTouched,isValied:emailIsValied,valueChangeHandler:emailChange,reset:emailReset} = useInput(value=>(value.length>3&&value.includes("@"))||value.length==0)
  const{empty:cityEmpty,setEmpty:setcityEmpty,hasError:cityHasError,entredValue:city,inputTouched:cityTouched,isValied:cityIsValied,valueChangeHandler:cityChange,reset:cityReset} = useInput(value=>value.length>4 || value.length ==0)
  const{empty:streetEmpty,setEmpty:setstreetEmpty,hasError:streetHasError,entredValue:street,inputTouched:streetTouched,isValied:streetIsValied,valueChangeHandler:streetChange,reset:streetReset} = useInput(value=>value.length>4 || value.length ==0)
  const{empty:pincodeEmpty,setEmpty:setpincodeEmpty,hasError:pincodeHasError,entredValue:pincode,inputTouched:pincodeTouched,isValied:pincodeIsValied,valueChangeHandler:pincodeChange,reset:pincodeReset} = useInput(value=>value.length==6 || value.length ==0)
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(fname.length === 0){
      setFnameEmpty(true)
    }else{setFnameEmpty(false)}
    if(laname.length === 0){
      setlanameEmpty(true)
    }else{setlanameEmpty(false)}
    if(email.length === 0){
      setemailEmpty(true)
    }else(setemailEmpty(false))
    if(city.length === 0){
      setcityEmpty(true)
    }else(setcityEmpty(false))
    if(street.length === 0){
      setstreetEmpty(true)
    }else(setstreetEmpty(false))
    if(pincode.length === 0){
      setpincodeEmpty(true)
    }else(setpincodeEmpty(false))
  }
  return (
    <div className={`checkout-container ${open ? "open" : "close"}  `}>
      <form id="check-form" className={`checkout-form ${open ? "open" : "close"}`} onSubmit={handleSubmit}>
      <label htmlFor="fname">First Name</label>
      <input className={`${fnameIsValied}`} onChange={fnameChange} value={fname} type="text" id="fname"/>
      {fnameEmpty&&<p className="error-text">first name cannot be empty</p>}
      {fnameIsValied||<p className="error-text">first name should atleast 3 charector long</p>}
      <label  htmlFor="lname">last Name</label>
      <input onChange={lanameChange} value={laname} type="text" id="lname"/>
      {lanameEmpty&&<p className="error-text">last name cannot be empty</p>}
      <label htmlFor="email">email</label>
      <input onChange={emailChange} type="text" id="email"/>
      {emailEmpty&&<p className="error-text">email name cannot be empty</p>}
      {emailIsValied||<p className="error-text">enter proper email address</p>}
      <label htmlFor="city">city</label>
      <input onChange={cityChange} type="text" id="city"/>
      {cityEmpty&&<p className="error-text">city cannot be empty</p>}
      <label htmlFor="street">street</label>
      <input onChange={streetChange} type="text" id="street"/>
      {streetEmpty&&<p className="error-text">street cannot be empty</p>}
      <label  htmlFor="pin-code">pin-code</label>
      <input onChange={pincodeChange} type="text" id="pin-code"/>
      {pincodeEmpty&&<p className="error-text">pincode cannot be empty</p>}
      {pincodeIsValied||<p className="error-text">pincode should contain 6 numbers</p>}
      </form>
      <div className="modal-buttons">
        <button onClick={()=>setOpen(false)} style={{backgroundColor:"transparent" ,color:"brown",border:"1px solid brown"}}  className="button">cancle</button>
        <button type="submit" form="check-form" className="button" >order</button>
      </div>
    </div>
  )
}

export default Checkout
