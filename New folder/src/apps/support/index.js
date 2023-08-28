
import { PrivateLayout } from "../layout";
import "./index.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import {actions} from "../../redux/slices/support";

export const Support = (props) => {
    
    const {user} = useSelector(state => state.auth);
    const [msgcontent , setMsgcontent] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("this is support___"+user.level);
    },[])

    const sendSupport = () => {
        let data = {
            supporter_id: user.id,
            supporter_name: user.name,
            supporter_email: user.email,
            content: msgcontent
        };
        dispatch(actions.postSupportStart(data));
        setMsgcontent("");
        alert("success");
    }

    let level = 12;
    if(user) {
        level = user.level;
    }

    return (
    <PrivateLayout>
        <div className="support-container">
            <div className="support-body">
                <div className="support-body-part">
                    <label className="support-label">Full Name</label>
                    <input className="support-control" value={user.name} disabled/>
                </div>
                <div className="support-body-part">
                    <label className="support-label">Email</label>
                    <input className="support-control" value={user.email} disabled/>
                </div>
                <div className="support-body-part">
                    <label className="support-label">Message</label>
                    <textarea rows="5" className="support-control textarea" value={msgcontent} onChange={e => setMsgcontent(e.target.value)} />
                </div>
                <div className="support-body-part">
                    <button className="support-btn" onClick={sendSupport}>Send Message</button>
                </div>
                <div>
                    <Link className="support-back" to = {level == 1 ? "/elderly/dashboard" : "/volunteer/dashboard"}>Back</Link>
                </div>
            </div>
        </div>
    </PrivateLayout>
    )
}