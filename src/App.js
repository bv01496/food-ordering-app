import React,{useState,useRef,useEffect,createContext,useReducer} from 'react'
import "./App.css"
import "boxicons"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Modal from "./components/Modal"

const App = () => {
  const[modalOpen,setModalOpen] = useState(false)


  return (
    <>
      <NavBar setModalOpen={setModalOpen}/>
      <Main modalOpen={modalOpen} />
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </>
  )
}

export default App

