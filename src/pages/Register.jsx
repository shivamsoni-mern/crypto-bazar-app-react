import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { registerUser } from "../provider/authContext/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    dispatch(registerUser(formData));
  };

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
      <h1 className="display-6 text-center">Register Here</h1>
      <div className="card my-3 p-3 rounded-0">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="form-control my-2 rounded-0"
            required
            name="name"
            onChange={handleChange}
            value={name}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="form-control my-2 rounded-0"
            required
            name="email"
            onChange={handleChange}
            value={email}
          />
          <input
            type="password"
            placeholder="Set Password"
            className="form-control my-2 rounded-0"
            required
            name="password"
            onChange={handleChange}
            value={password}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="form-control my-2 rounded-0"
            required
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
          />

          <button type="submit" className="btn btn-success w-100 my-3 w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
