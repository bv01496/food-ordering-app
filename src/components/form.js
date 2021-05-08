import React from 'react'
import useCustom from "./hooks/custom_hook"

const Form = () => {
  const{
    empty : nameEmpty,
    setEmpty : setnameEmpty,
    entredValue:name,
    inputTouched:nameTouched,
    isValied:nameValied,
    valueChangeHandler:nameChangeHandler,
    isTouched:nameIsTouched,
    reset: namereset
  } = useCustom(value=> (value.trim() !== "")&&( value.length > 5))

  const{
    empty : emailEmpty,
    setEmpty : setemailEmpty,
    entredValue:email,
    inputTouched:emailTouched,
    isValied:emailValied,
    valueChangeHandler:emailChangeHandler,
    isTouched:emailIsTouched,
    reset : emailreset
  } = useCustom((value=> (value.includes("@"))&&(value.length > 5)))
  const submitHandler=(e)=>{
    e.preventDefault()
    if(!nameTouched ||name.length === 0){
      setnameEmpty(false)
    }
    if(!emailTouched ||email.length === 0){
      setemailEmpty(false)
    }
    if(nameValied && emailValied){
      console.log("form submited");
      namereset()
      emailreset()
    }else{
      console.log("wrong");
    }
  }
  
  return (
    <form className="form" onSubmit={submitHandler}>
      <input onChange={nameChangeHandler} value={name} onBlur={nameIsTouched} placeholder="enter name" id="name" type="text"/>
      {nameEmpty || <p>name cannot be empty</p>}
      <input onChange={emailChangeHandler} value={email} onBlur={emailIsTouched} placeholder="enter email" id="email" type="text"/>
      {emailEmpty || <p>email cannot be empty</p>}
      <button type="submit">submit</button>
    </form>
  )
}

export default Form
