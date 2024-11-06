import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../provider/authContext/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="navbar bg-light shadow">
      <div className="container-fluid">
        <Link to={"/"}>
          <span className="navbar-brand mb-0 h1">Crypto App</span>
        </Link>
        <span>
          {user ? (
            <>
              <Link
                to={"/user/cart"}
                className="btn btn-sm btn-outline-success mx-2"
              >
                Cart ({cartItems.length})
              </Link>
              <button
                onClick={() => dispatch(logoutUser())}
                className="btn btn-danger rounded-0 btn-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn btn-success rounded-0 btn-sm mx-2"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn btn-success rounded-0 btn-sm"
              >
                Register
              </Link>
            </>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
