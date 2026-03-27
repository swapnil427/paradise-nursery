import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Succulents",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Fern",
    price: 12,
    category: "Indoor",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Cactus",
    price: 8,
    category: "Succulents",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "Bamboo",
    price: 20,
    category: "Outdoor",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Rose",
    price: 18,
    category: "Outdoor",
    img: "https://via.placeholder.com/100",
  },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plants</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {plants.map((p) => (
          <div key={p.id}>
            <img src={p.img} alt={p.name} />
            <h4>{p.name}</h4>
            <p>${p.price}</p>
            <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}