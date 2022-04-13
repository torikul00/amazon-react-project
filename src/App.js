import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Header from "./Components/Header/Header";
import OrderReview from "./Components/OrderReview/OrderReview";
import Inventory from './Components/Inventory/Inventory'
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import RequireAuth from "./Components/RequireAuth";
import { Toaster } from "react-hot-toast";


function App() {
 return (
    <div>
     <Toaster
   
     />
     <Header />
     <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/orderReview" element={<OrderReview />} />
       <Route path="/manageInventory" element={
         <RequireAuth>
              <Inventory />
         </RequireAuth>
      
       
       } />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

     </Routes>
   </div>
 )
}
export default App;