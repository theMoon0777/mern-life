
import { PrivateLayout } from "../layout";
import "./index.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import {actions} from "../../redux/slices/support";

export const Users = (props) => {
    
    const {user} = useSelector(state => state.auth);
    const {supports} = useSelector(state => state.support);
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("this is support___"+user.level);
        dispatch(actions.getSupport());
    },[])

    let level = 12;
    if(user) {
        level = user.level;
    }

    return (
    <PrivateLayout>
        <div className="supports-container">
          This is Users admin dashbard
        </div>
    </PrivateLayout>
    )
}