import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.market_data.current_price.inr,
    0
  );

  if (cartItems.length === 0) {
    return (
      <h1 className="display-6 text-center my-5 text-secondary">
        No Items in Your Cart
      </h1>
    );
  }

  return (
    <div className="container p-5">
      <div className="row g-3">
        <div className="col-md-8 col-sm-12">
          <div className="card rounded-0 p-3">
            {cartItems.map((item) => (
              <CartItem key={item.id} coin={item} />
            ))}
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card rounded-0 p-3">
            <h1 className="display-6">Coins : {cartItems.length}</h1>
            <h1 className="display-6">Your Total:</h1>
            <h1 className="display-5">{totalPrice.toFixed(2)}</h1>
            <button className="btn btn-sm btn-primary rounded-0 my-3">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
