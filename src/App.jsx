import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Root from "./layouts/Root"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Shop from "./pages/Shop"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root/>}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/shop" element={<Shop/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
