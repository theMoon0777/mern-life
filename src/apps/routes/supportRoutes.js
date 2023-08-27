import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

import { Support } from "../support";
import { Supports } from "../supports";


import { useEffect } from "react";

const SupportRoute = ({ children }) => {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
  
    useEffect(() => {
      if (!auth.isAuthenticated) navigate("/signin");

    }, [navigate, auth]);
  
    return <>{children}</>;
  };
  
  const SupportRoutes = [
    {
      path: "support",
      element: (
        <SupportRoute>
          <Support />
        </SupportRoute>
      ),
    },
    {
        path: "supports",
        element: (
            <SupportRoute>
                <Supports />
            </SupportRoute>
        )
    }
  ];
  
  export default SupportRoutes;
  