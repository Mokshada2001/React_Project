import React from 'react'
import './Footer.css'

const Footer = () => {
  let footerStyle = {
    top: "70vh",
    position: "relative",
    width: "100%",
    border: "2px solid #8f77b7",
    //background-color: "lavender"
  }
  return (
    <footer className="bg-dark text-dark py-3" style=
    {footerStyle}>
      <p className="text-center">
      Copyright &copy; MyTodosList.com by Mokshada
      </p>
    </footer>
  )
}

export default Footer


