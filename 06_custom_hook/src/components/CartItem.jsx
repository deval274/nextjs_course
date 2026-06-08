import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

function CartItem({ item, onUpdateQuantity, onRemoveFromCart }) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <div className="quantity-controls">
          <button
            onClick={() =>
              item.quantity === 1
                ? null
                : onUpdateQuantity(item.id, item.quantity - 1)
            }
          >
            <FaMinus />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            <FaPlus />
          </button>
        </div>
      </div>
      <button className="remove-btn" onClick={() => onRemoveFromCart(item.id)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
