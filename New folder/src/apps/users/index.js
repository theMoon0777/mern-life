import { PrivateLayout } from "../layout";
import "./index.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import {actions} from "../../redux/slices/admin";

export const Users = (props) => {
    
    const {user} = useSelector(state => state.auth);
    const {users} = useSelector(state => state.admin);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actions.getUsers());
    },[])

    let level = 12;
    if(user) {
        level = user.level;
    }

    return (
    <PrivateLayout>
        <div className="users-container">
            <div className="admin-back-div">
                <h2 className="users-h">This is Users Dashboard</h2>
                <Link className="admin-back" to = "/admin/dashboard">Back</Link>
            </div>
            <div className="supports-content">
                <table id="customers">
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Level</th>
                    </tr>
                    {
                        !users.users ? "" : users.users.map(data => (
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.level == 1 ? "Elderly" : "Volunteer"}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    </PrivateLayout>
    )
}