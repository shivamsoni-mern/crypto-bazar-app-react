import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { loginUser } from "../provider/authContext/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };
  const navigate = useNavigate();
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    user && navigate("/");

    if (isError && message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container p-5">
      <h1 className="display-6 text-center">Login Here</h1>
      <div className="card my-3 p-3 rounded-0">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="form-control my-2 rounded-0"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Set Password"
            className="form-control my-2 rounded-0"
            required
            name="password"
            value={password}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-success w-100 my-3 w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
