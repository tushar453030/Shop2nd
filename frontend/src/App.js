import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
const App = () =>{
  return (
    <Router>
    
    <Header className='text-gradient'/> 
    <main className="py-3">
     <Container>
      <Routes>

        <Route path="/login/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />       
        <Route path="/cart/:id" element={<CartScreen />} />  
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/" element={<HomeScreen/>} exact />
      </Routes>
     </Container>
    </main>
    <Footer className='color-nav'/>
    </Router>
  );
}

export default App;
