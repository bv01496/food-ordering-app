import {useEffect, useState} from "react"

const useInput=(validate)=>{
  const [entredValue,setEntredValue] = useState("")
  const [inputTouched,setInputTouched] = useState(false)
  const [empty,setEmpty] = useState(null)
  useEffect(()=>{
    if(entredValue.length > 0){
      setEmpty(false)
    }
  },[entredValue])
  
  const isValied = validate(entredValue)
  const valueChangeHandler=(e)=>{
    setEntredValue(e.target.value)
  }
  const hasError = !isValied || empty
  const isTouched =()=>{
    setInputTouched(true)
  }
  const reset=()=>{
    setInputTouched(false)
    setEntredValue("")
  }
  return{
    empty,setEmpty,hasError,entredValue,inputTouched,isValied,valueChangeHandler,isTouched,reset
  }
}
export default useInput