
import { PrivateLayout } from "../layout";
import "./index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export const Admin = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      }, []);
  
      
    return (
    <PrivateLayout>
        <div>
            This is admin dashboard
        </div>
    </PrivateLayout>
    )
}