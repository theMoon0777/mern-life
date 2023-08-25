import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

import { Dashboard } from "../dashboard";
import { VolDashboard } from "../voldashboard";

import {CreatePost} from "../createpost";

import { useEffect } from "react";

const DashboardRoute = ({ children }) => {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
  
    useEffect(() => {
      if (!auth.isAuthenticated) navigate("/signin");
      else {
        switch(auth.user.level) {
            case 1:
                navigate("/elderly/dashboard");
                break;
            case 2:
                navigate("/volunteer/dashboard");
                break;
        }
      };
    }, [navigate, auth]);
  
    return <>{children}</>;
  };
  
  const DashboardRoutes = [
    {
      path: "elderly/dashboard",
      element: (
        <DashboardRoute>
          <Dashboard />
        </DashboardRoute>
      ),
    },
    {
        path: "elderly/newpost",
        element: (
            <CreatePost />
        ),
      },
      {
        path: "volunteer/dashboard",
        element: (
            <DashboardRoute>
                <VolDashboard />
            </DashboardRoute>
        )
      }
  ];
  
  export default DashboardRoutes;
  