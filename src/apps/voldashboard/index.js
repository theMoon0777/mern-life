
import { PrivateLayout } from "../layout";
import "./index.css";
import {Postcomp} from "./components/postcomp"; 

import { Progress, Space } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {actions} from "../../redux/slices/post";

export const VolDashboard = () => {

    const dispatch = useDispatch();
    const {allposts} = useSelector(state => state.post);

    let acceptedCount = 0 ;
    allposts.map(data => {
        if(data.status == 1) {
            acceptedCount++;
        }
    });

    const {flag} = useSelector(state=> state.post);

    useEffect(() => {
        dispatch(actions.getAllPostsStart());
      }, []);
    
    useEffect(() => {
        dispatch(actions.getAllPostsStart());
    }, [flag]);
      
      const taking = (id) => {
        if(id.slice(0,2) == "un") {
            dispatch(actions.unsetTakingStart(id.slice(8, id.length)));
        }
        else {
            dispatch(actions.setTakingStart(id.slice(6, id.length)));
        }
        dispatch(actions.setflag());
      }

    return (
    <PrivateLayout>
        <div className="lx h-100-p">
            <div className="lx-6 lx lx-col">
                <div className="lx space-between">
                    <h1>POSTS</h1>
                    <div className="lx align-center">
                       
                        <select className="date-viewselect b-0 bb-gray ml-s">
                            <option>All Posts</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    
                </div>
                <div className="overflow-auto h-80-vh pr-20">
                    {
                        allposts.map(data => {
                            return (<>
                                <Postcomp feature = {data} taking = {taking}/>  
                            </>)
                        })
                    }
                </div>
            </div>
            
            <div className="lx-4 dashboard-high-skill">
                <div className="circle-progress-div">
                    <div className="circle-header bb-gray lx space-between">
                        <p className="">Progressing Monitor</p>
                        <select className="b-0 bb-gray ml-s progress-select">
                            <option>All Posts</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div className="circle-body">
                        <h3 className="total-h">You totally accepted</h3>
                        <div className="circle-div">
                            {acceptedCount}
                        </div>
                    </div>
                </div>
                <div className="support-div">
                    To send Message to support team, Please click here;
                    <div className="lx">
                        <button className="send-request-btn">Send Request</button>
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
    )
}