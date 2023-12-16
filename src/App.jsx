import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import SignUp from "./components/SignUp"
import CardSection from './components/CardSection'

const NavLinks = ["Home", "Srevice", "Contact", "About"]


function App() {

  return (

    <>
      <Navbar nBrand="Web Brand" nLink={NavLinks} />
      <SignUp />
      <CardSection />
    </>

  )
}

export default App