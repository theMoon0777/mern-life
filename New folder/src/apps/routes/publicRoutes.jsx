import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { SignIn, SignUp } from "../auth_life";
// import { Dashboard } from "../creator";
import { Dashboard } from "../dashboard";
import {CreatePost} from "../createpost";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      switch (auth.user.level) {
        case 1:
          navigate("/elderly/dashboard");
          break;
        case 2:
          navigate("/volunteer/dashboard");
          break;
        case 0:
          navigate("/admin/dashboard");
          break;
      }
    }
  }, [navigate, auth]);

  return <>{children}</>;
};

const PublicRoutes = [
  {
    path: "signin",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: "signup",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: "deals",
    element: <Dashboard />,
  },

];

export default PublicRoutes;
