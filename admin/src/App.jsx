import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TopNav from './components/TopNav'
import SideNav from './components/SideNav'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Users from './pages/Users'
import User from './pages/User'
import CreateUser from './pages/CreateUser'
import Products from './pages/Products'
import Product from './pages/Product'
import CreateProduct from './pages/CreateProduct'

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newuser" element={<CreateUser />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newproduct" element={<CreateProduct />} />
      </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
