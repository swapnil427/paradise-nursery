import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/CartSlice";

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div>
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.name} />
          <h4>{item.name}</h4>
          <p>${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total Cart Value: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
  );
}