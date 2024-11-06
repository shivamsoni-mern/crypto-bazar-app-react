import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  // GET USER from state
  const { user } = useSelector((state) => state.auth);

  const [checkStatus, setCheckStatus] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    setCheckStatus(false);
  }, [user]);

  return { isLoggedIn, checkStatus };
};

export default useAuth;
