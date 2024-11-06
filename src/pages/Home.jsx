import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CoinCard from "../components/CoinCard";
import Loading from "../components/Loading";
import { getCoins } from "../provider/coinContext/coinSlice";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { coins, isLoading, isError, message } = useSelector(
    (state) => state.coin
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (isError && message) {
      toast.error(message);
      return;
    }

    dispatch(getCoins());
  }, [user, isError, message]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container p-5">
      <h1 className="diaply-6 text-center my-3">Trending Coins</h1>
      <div className="row g-3">
        {coins.map((coin) => (
          <CoinCard key={coin.item.id} coin={coin.item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
