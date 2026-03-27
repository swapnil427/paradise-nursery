import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Jade Plant", price: 14, category: "Succulents", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Echeveria", price: 11, category: "Succulents", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Haworthia", price: 13, category: "Succulents", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Cactus", price: 8, category: "Succulents", img: "https://via.placeholder.com/100" },
  { id: 6, name: "String of Pearls", price: 16, category: "Succulents", img: "https://via.placeholder.com/100" },
  { id: 7, name: "Snake Plant", price: 15, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 8, name: "Fern", price: 12, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 9, name: "Peace Lily", price: 18, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 10, name: "Pothos", price: 13, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 11, name: "ZZ Plant", price: 19, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 12, name: "Spider Plant", price: 11, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 13, name: "Bamboo", price: 20, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 14, name: "Rose", price: 18, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 15, name: "Lavender", price: 17, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 16, name: "Hibiscus", price: 21, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 17, name: "Marigold", price: 9, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 18, name: "Bougainvillea", price: 22, category: "Outdoor", img: "https://via.placeholder.com/100" },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({items.length})</Link>
      </nav>

      <h2>Plants by Category</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {categories.map((category) => (
          <section key={category}>
            <h3>{category}</h3>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {plants
                .filter((p) => p.category === category)
                .map((p) => (
                  <div key={p.id}>
                    <img src={p.img} alt={p.name} />
                    <h4>{p.name}</h4>
                    <p>${p.price}</p>
                    <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}