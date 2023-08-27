import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

import { Users } from "../users";


import { useEffect } from "react";

const UserRoute = ({ children }) => {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
  
    useEffect(() => {
      if (!auth.isAuthenticated) navigate("/signin");

    }, [navigate, auth]);
  
    return <>{children}</>;
  };
  
  const UserRoutes = [
    {
      path: "users",
      element: (
        <UserRoute>
          <Users />
        </UserRoute>
      ),
    }
  ];
  
  export default UserRoutes;
  