import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import PrivateRouter from "./components/PrivateRouter";
import CoinDetails from "./pages/CoinDetails";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<PrivateRouter />}>
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="coin/:id" element={<CoinDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
