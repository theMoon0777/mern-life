
import { PrivateLayout } from "../layout";
import "./index.css";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import {actions} from "../../redux/slices/post";

export const Chat = (props) => {
    const routerParams = useParams();
    const {id} = routerParams;

    useEffect(() => {
        dispatch(actions.getPostStart(id));
        // dispatch(actions.getMsgStart(id));
      }, []);
    const [msgcontent, setMsgcontent] = useState("");
    
    const {user} = useSelector(state => state.auth)
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
      
    const {post} = useSelector(state => state.post);

    let showcontent  = "";
    if(user) {
        if(user.level == 1 ) {
            showcontent = "Your post is accepted by ";
            showcontent += (post[0])? post[0].volun_id.email: "";
        }
        else if (user.level == 2) {
            showcontent = "You accepted post of "
            showcontent += (post[0])? post[0].elder_id.email: "";
        }
    }
        

    const sendMessage = () => {
        let data = {
            post_id: id,
            from : user.id,
            to: (post[0])? post[0].volun_id._id:"",
            content: msgcontent
        };
        dispatch(actions.postMsgStart(data));
    }

    return (
    <PrivateLayout>
        <div className="chat-container lx lx-col">
            <Link to="/elderly/dashboard">Back</Link>
            <div className="chat-des">
                <h2>{category[(post[0]) ? post[0].themeskind: 0]}</h2>
                <h4>{(post[0]) ? post[0].themescontent : ""}</h4>
                <h5>{showcontent}</h5>
            </div>
            <div className="lx lx-col lx-1">
                <div className="chat-content">

                </div>
                <div className="lx">
                    <input className="chat-input lx-1" value={msgcontent} onChange={e => setMsgcontent(e.target.value)}/>
                    <button className="chat-btn" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    </PrivateLayout>
    )
}