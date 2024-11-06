import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoin } from "../provider/coinContext/coinSlice";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { add } from "../provider/cartContext/cartSlice";

const CoinDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { coin, isLoading, isError, message } = useSelector(
    (state) => state.coin
  );

  // ADD TO CART
  const handleAddToCart = (coin) => {
    dispatch(add(coin));
  };

  useEffect(() => {
    dispatch(getCoin(id));
    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message]);
  if (isLoading || !coin) {
    return <Loading />;
  }
  return (
    <div className="container p-5">
      <div className="card my-3 rounded-0 p-3">
        <img
          src={coin.image.large}
          className="my-3"
          style={{ height: "150px", width: "150px" }}
          alt="coin image"
        />
        <h1 className="display-6">Coin Name : {coin.name}</h1>
        <h1 className="display-6">
          Price(INR) : {coin.market_data.current_price.inr}
        </h1>

        <p className="p">Symbol : {coin.symbol}</p>
        <p className="p">Description : {coin.description.en}</p>
      </div>
      <button
        className="btn btn-success rounded-0 my-3 w-50"
        onClick={() => handleAddToCart(coin)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CoinDetails;
