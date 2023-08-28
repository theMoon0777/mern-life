import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

import { Dashboard } from "../dashboard";
import { VolDashboard } from "../voldashboard";
import { Admin } from "../admin";

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
            case 0:
              navigate("/admin/dashboard");
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
      },
      {
        path: "admin/dashboard",
        element: (
            <DashboardRoute>
                <Admin />
            </DashboardRoute>
        )
      }
  ];
  
  export default DashboardRoutes;
  