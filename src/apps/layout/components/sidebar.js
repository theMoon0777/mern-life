
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as context from "../../../redux/context";
import {actions} from "../../../redux/slices/auth";

const Sidebar = () => {

    const dispatch = useDispatch();
    const image = useContext(context.imageContext).state;
    const signout = () => {
        localStorage.removeItem("token");
        dispatch(actions.signOut());
    }

    return (
        <div className="sidebar-div">
            <div className="sidebar-container">
            <img className="round sidebar-logo" src={image.helpMe} alt="...loading" />
            </div>
            <div className="sidebar">
            <input className="sidebar-input" placeholder="search" />
            <Link  href="#home">Home</Link>
            <Link  href="#home">Posts</Link>
            <Link  href="#home">Charts</Link>
            {/* <SiderElements /> */}
            <button onClick={signout} className="signout-btn">SignOut</button>
            </div>
        </div>
    );
};

Sidebar.propTypes = {};

export default Sidebar;
