import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Contact from './components/Contact';
import Cart from './components/Cart';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/products" element={<Products />}>
        </Route>
        <Route exact path="/products/:id" element={<Product />}>
        </Route>
        <Route exact path="/contact" element={<Contact />}>
        </Route>
        <Route exact path='/cart' element={<Cart />}>
        </Route>
        <Route exact path='/about' element={<About />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
