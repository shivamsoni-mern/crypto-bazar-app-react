import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { remove } from "../provider/cartContext/cartSlice";

const CartItem = ({ coin }) => {
  const dispatch = useDispatch();

  // Remove from cart
  const handleRemoveFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="card p-4 rounded-0 my-1">
      <div className="d-flex align-items-center justify-content-between">
        <img style={{ height: "100px" }} src={coin.image.large} />
        <h5 className="my-2">{coin.name}</h5>
        <p className="my-2">Qty: 1</p>
        <h4 className="my-2">Price: {coin.market_data.current_price.inr}</h4>
      </div>
      <button
        className="btn btn-sm btn-danger rounded-0 my-3"
        onClick={() => handleRemoveFromCart(coin.id)}
      >
        Remove
      </button>
    </div>
  );
};

CartItem.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
    market_data: PropTypes.shape({
      current_price: PropTypes.shape({
        inr: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CartItem;
