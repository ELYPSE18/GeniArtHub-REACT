import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import { CartProvider } from './components/cartContext';
import { Cart } from './pages/cart';






function App() {
 
  return (
    <Router>
      <CartProvider>
          <Routes>
            <Route path="/product/:id" element={<Product />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
       </CartProvider>
    </Router>
  );
}

export default App;