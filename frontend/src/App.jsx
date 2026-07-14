import React from 'react';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import ReturnPolicy from './pages/ReturnPolicy';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import AdminDashboard from './admin/AdminDashboard';
import AddProduct from './admin/AddProduct';
import EditProduct from './admin/EditProduct';
import AdminUsers from './admin/AdminUsers';
import AdminProducts from './admin/AdminProducts';
import AdminOrders from './admin/AdminOrders';
function App(){
  return(
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/return" element={<ReturnPolicy/>}/>
      <Route path="/disclaimer" element={<Disclaimer/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/ordersuccess" element={<OrderSuccess/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/admin" element={<AdminDashboard/>}/>
      <Route path="/admin/add-product" element={<AddProduct/>}/>
      <Route path ="/admin/orders" element={<AdminOrders/>}/>
      <Route path="/admin/products" element={<AdminProducts/>}/>
      <Route path="/admin/users" element={<AdminUsers/>}/>
      <Route path="/admin/edit-product/:id" element={<EditProduct/>}/>
          </Routes>
    <Footer/>
  </Router>
  );
}
export default App;