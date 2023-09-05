import { useEffect, useState } from "react";

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("user");
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return isLoggedIn;
};

export default useIsLoggedIn;