import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

import { Chat } from "../chat";

import { useEffect } from "react";

const ChatRoute = ({ children }) => {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
  
    useEffect(() => {
      if (!auth.isAuthenticated) navigate("/signin");
      
    }, [navigate, auth]);
  
    return <>{children}</>;
  };
  
  const ChatRoutes = [
    {
      path: "chatroom/:id",
      element: (
        <ChatRoute>
          <Chat />
        </ChatRoute>
      ),
    },
  ];
  
  export default ChatRoutes;
  