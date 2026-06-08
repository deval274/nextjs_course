import "./App.css";
import { useCart } from "./hooks/useCart";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  return (
    <>
      <div className="app">
        <header>
          <h1>Shopping Cart</h1>
        </header>
        <main className="products">
          <section>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </section>
          <section>
            <Cart
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
              total={total}
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
