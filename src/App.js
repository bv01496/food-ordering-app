import React,{useState,useSelector} from 'react'
import "./App.css"
import "boxicons"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Modal from "./components/Modal"
import store from "./components/stores/index"
import {Provider} from "react-redux"

const App = () => {
  const[modalOpen,setModalOpen] = useState(false)

  return (
    <>
      <NavBar setModalOpen={setModalOpen}/>
      <Provider store={store}>
      <Main  modalOpen={modalOpen} />
      </Provider>
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </>
  )
}

export default App

