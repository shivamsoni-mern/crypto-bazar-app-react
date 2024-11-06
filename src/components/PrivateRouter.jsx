import useAuth from "../hooks/useAuth";
import Loading from "./Loading";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { isLoggedIn, checkStatus } = useAuth();
  if (checkStatus) return <Loading />;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
