
import { PrivateLayout } from "../layout";
import "./index.css";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import {actions} from "../../redux/slices/post";

export const Chat = (props) => {
    const [msgcontent, setMsgcontent] = useState("");
    const routerParams = useParams();
    const {id} = routerParams;
    const dispatch = useDispatch();
    const category = [
      'Technological',
      'Walk outside',
       'Help at home',
       'Medicine',
        'See a doctor',
       'Meeting',
       'Shopping',
        'Other',
    ];
    useEffect(() => {
        console.log("Sadfs");
        dispatch(actions.getPostStart(id));
      }, []);
      
      const sendMessage = () => {
        console.log();
      }
    const {post} = useSelector(state => state.post);
    return (
    <PrivateLayout>
        <div className="chat-container lx lx-col">
            <Link to="/elderly/dashboard">Back</Link>
            <div className="chat-des">
                <h2>{category[post[0].themeskind]}</h2>
                <h4>{post[0].themescontent}</h4>
                <h5>Your post is accepted by {post[0].volun_id.name}</h5>

                <h5>His or Her email is {post[0].volun_id.email}</h5>

            </div>
            <div className="lx lx-col lx-1">
                <textarea className="chat-text" disabled/>
                <div className="lx">
                    <input className="chat-input lx-1" value={msgcontent} onChange={e => setMsgcontent(e.target.value)}/>
                    <button className="chat-btn" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    </PrivateLayout>
    )
}