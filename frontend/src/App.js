import './App.css';
import Home from './components/Home';
import NavBarComp from './components/NavBarComp';
// import Header from './components/Header'; // Importing Header component
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Notfound from './components/Notfound';
import Login from './components/Login';
import Signup from './components/Signup';
import AboutUs from './components/Aboutus';
import Footer from './components/Footer';
import SwapItems from './components/SwapItems';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';
import PaymentPage from './components/PaymentPage';
import PaymentSuccess from './components/PaymentSuccess';
import Cart from './components/Cart';
import Inventories from './components/Inventories';
import Adminproducts from './components/AdminProducts';
import Reports from './components/Reports';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import Settings from './components/Settings'; // Import Settings component
import Users from './components/Users'; // Import Customers component

function App() {
  return (
    <div className="App">
      <NavBarComp />
      {/* <Header /> Adding Header component */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/swap' element={<SwapItems />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/payment/success/:transactionId' element={<PaymentSuccess />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin-dashboard' element={<Dashboard />} /> {/* Route for Dashboard component */}
        <Route path='inventories' element={<Inventories />} /> {/* Route for Inventories component */}
        <Route path='/admin-products' element={<Adminproducts />} /> {/* Route for AdminProducts component */}
        <Route path='reports' element={<Reports />} /> {/* Route for Reports component */}
        <Route path='/settings' element={<Settings />} /> {/* Route for Settings component */}
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='*' element={<Notfound />} />
        <Route path='admin/customers' element={<Users />} /> {/* Route for Customers component */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
