import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Header from "./Components/Header/Header";
import OrderReview from "./Components/OrderReview/OrderReview";
import Inventory from './Components/Inventory/Inventory'
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";


function App() {
 return (
    <div>
     <Header />
     <Routes>
    <Route path="/" element={<Shop />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/orderReview" element={<OrderReview />} />
    <Route path="/manageInventory" element={<Inventory />} />
    <Route path="/about" element={<About />} />


     </Routes>
   </div>
 )
}
export default App;