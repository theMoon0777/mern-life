import { PrivateLayout } from "../layout";
import "./index.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import {actions} from "../../redux/slices/admin";

export const Posts = (props) => {
    
    const {user} = useSelector(state => state.auth);
    const {posts} = useSelector(state => state.admin);
    const dispatch = useDispatch();
    let themeskind = ["Technological",'Walk outside','Help at home','Medicine','See a doctor','Meeting','Shopping','Other'];

    useEffect(()=>{
        dispatch(actions.getPosts());
    },[])

    let level = 12;
    if(user) {
        level = user.level;
    }

    return (
    <PrivateLayout>
        <div className="posts-container">
            <div className="admin-back-div">
                <h2 className="posts-h">This is Posts Dashboard</h2>
                <Link className="admin-back" to = "/admin/dashboard">Back</Link>
            </div>
            <div className="supports-content">
                <table id="customers">
                    <tr>
                        <th>Post Name</th>
                        <th>Post Participants</th>
                        <th>Post Type</th>
                        <th>Post Content</th>
                        <th>Post Type</th>

                    </tr>
                    {
                        !posts.posts ? "" : posts.posts.map(data => (
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.participants}</td>
                                <td>{themeskind[data.themeskind]}</td>
                                <td>{data.themescontent}</td>
                                <td>{data.status ===1 ? "accepted" : "Yet No Accepted"}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    </PrivateLayout>
    )
}