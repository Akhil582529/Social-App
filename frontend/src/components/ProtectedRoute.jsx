import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/login",
          {
            withCredentials: true, 
          }
        );

        if (res.status === 200) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        setIsAuth(false);
      }
    };

    verifyUser();
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;