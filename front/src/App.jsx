import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';





function App() {
 
  return (
    <Router>
          <Routes>
            <Route path="/product/:id" element={<Product />} />
            <Route path="/" element={<Home />} />
          </Routes>
    </Router>
  );
}

export default App;