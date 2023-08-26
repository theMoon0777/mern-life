
import { PrivateLayout } from "../layout";
import "./index.css";
import {Postcomp} from "./components/postcomp"; 

import { Progress, Space } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {actions} from "../../redux/slices/post";

export const Dashboard = () => {

    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.post);

    useEffect(() => {
        dispatch(actions.getPostsStart());
      }, []);
  
      
    return (
    <PrivateLayout>
        <div className="lx h-100-p">
            <div className="lx-6 lx lx-col">
                <div className="lx space-between">
                    <h1>POSTS</h1>
                    <div className="lx align-center">
                        <Link to="/elderly/newpost" className="new-post-btn font-size-s b-0">+ New Post</Link>
                        {/* <a href="/newpost" className="new-post-btn font-size-s b-0">+ New Post</a> */}
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
                        posts.map(data => {
                            console.log(data);
                            return (<>
                                <Postcomp feature = {data} />  
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
                        <h3 className="total-h">Total Posted Number</h3>
                        <div className="circle-div">
                            {posts.length}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
    )
}