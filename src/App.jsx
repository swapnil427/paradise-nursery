import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="home landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Discover beautiful plants and brighten your space with nature.</p>
      <button onClick={() => navigate("/plants")}>Get Started</button>
    </div>
  );
}

export default function App() {
  const items = useSelector((state) => state.cart.items);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({items.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

