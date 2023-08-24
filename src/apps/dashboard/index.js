import { PrivateLayout } from "../layout";
import "./index.css";
import {Postcomp} from "./components/postcomp"; 

import { Progress, Space } from 'antd';

export const Dashboard = () => {

    const posts = [
        {
            name: "aee a doctor",
            des: "see a doctor today"
        },
        {
            name: "hee a doctor",
            des: "see a doctor today"
        },
        {
            name: "nee a doctor",
            des: "see a doctor today"
        },
        {
            name: "pee a doctor",
            des: "see a doctor today"
        },
        {
            name: "see a doctor",
            des: "see a doctor today"
        },
        {
            name: "wee a doctor",
            des: "see a doctor today"
        }
    ];

    return (
    <PrivateLayout>
        <div className="lx h-100-p">
            <div className="lx-6 lx lx-col">
                <div className="lx space-between">
                    <h1>POSTS</h1>
                    <div className="lx align-center">
                        <button className="new-post-btn font-size-s b-0">+ New Post</button>
                        <select className="date-viewselect b-0 bb-gray ml-s">
                            <option>All Posts</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    
                </div>
                <div className="overflow-auto lx-1">
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
                        <div className="circle-body-content">
                            <Space wrap>
                                <Progress type="circle" percent={71} />
                            </Space>
                        </div>
                        <div className="circle-body-support lx lx-col align-center">
                            <p className="">System Status</p>
                            <div className="lx align-center">
                                <div className="radio-color-div"></div>
                                <span className="ml-xs font-weight-bold">OPTIMUM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
    )
}