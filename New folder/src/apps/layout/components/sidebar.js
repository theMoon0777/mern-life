
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as context from "../../../redux/context";
import {actions} from "../../../redux/slices/auth";

const Sidebar = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const image = useContext(context.imageContext).state;
    const signout = () => {
        localStorage.removeItem("token");
        dispatch(actions.signOut());
    }
    let level = 0;
    if(user) {
        level = user.level;
    }
    return (
        <div className="sidebar-div">
            <div className="sidebar-container">
            <img className="round sidebar-logo" src={image.helpMe} alt="...loading" />
            </div>
            <div className="sidebar">
            <input className="sidebar-input" placeholder="search" />
            {level != 0 ? <Link  href="#home">Home</Link> : ""}
            {level != 0 ? level == 1 ? <Link to = "/elderly/dashboard">Posts</Link> : level == 2 ? <Link to = "/volunteer/dashboard">Posts</Link> : <Link  to="/posts">All Posts</Link> : <Link  to="/posts">All Posts</Link> }
            {level != 0 ? <Link  to="/support">Support</Link> : <Link to="/supports">All Supports</Link> }
            {level == 0 ? <Link to="/users">All Users</Link> : ""}
            <button onClick={signout} className="signout-btn">SignOut</button>
            </div>
        </div>
    );
};

Sidebar.propTypes = {};

export default Sidebar;
