
import { PrivateLayout } from "../layout";
import "./index.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import {actions} from "../../redux/slices/support";

export const Supports = (props) => {
    
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
            <div className="supports-body">
                <div>
                    <Link className="supports-back" to = {level == 1 ? "/elderly/dashboard" : level == 2 ? "/volunteer/dashboard" : "/admin/dashboard"}>Back</Link>
                </div>
                <div className="supports-content">
                    <table id="customers">
                        <tr>
                            <th>Supporter Name</th>
                            <th>Supporter Email</th>
                            <th>Content</th>
                        </tr>
                        {
                            !supports ? "" : supports.msgs.map(data => (
                                <tr>
                                    <td>{data.supporter_name}</td>
                                    <td>{data.supporter_email}</td>
                                    <td>{data.content}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
    </PrivateLayout>
    )
}