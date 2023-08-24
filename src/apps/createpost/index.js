import "./index.css";
import { imageContext } from "../../redux/context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import {FirstStep} from  "./firstStep";
import {SecondStep} from  "./secondStep";


const steps = [
    {
      title: 'Step1',
      content: 'First-content',
    },
    {
      title: 'Step2',
      content: 'Second-content',
    },
    {
      title: 'Step3',
      content: 'Third-content',
    },
    {
        title: 'Step4',
        content: 'Firth-content',
    },
    {
        title: 'Step5',
        content: 'Last-content',
    },
  ];

 

export const CreatePost = ({}) => {

    const [name, setName] = useState("");
    const [member, setMember] = useState("");

    const image = useContext(imageContext).state;

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
      console.log(name);
    };
    const prev = () => {
      setCurrent(current - 1);
      console.log(name);
    };
    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));
    const contentStyle = {
      lineHeight: '260px',
      textAlign: 'center',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
    };

    const storename = (name) => {
        setName(name);
    }
    const storemember = (member) => {
        setMember(member);
    }
    return (
        <>
            <div className="new-post w-100-p h-100-vh">
                <div className="new-post-container lx lx-col">
                    <div className="lx space-between align-center">
                        <img className="helpme" src={image.helpMe} alt="...loading" />
                        <Link className="backbtn" to="/elderly/dashboard">Back</Link>
                    </div>
                    <div className="new-post-content">
                        <Steps current={current} items={items} />
                        <div style={contentStyle}>{steps[current].content=="First-content" ? <FirstStep send={storename} data={name}/> : steps[current].content=="Second-content" ? <SecondStep send={storemember} data={member} /> : "" }</div>
                        <div
                            style={{
                            marginTop: 24,
                            }}
                        >
                            {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                            )}
                            {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Submit
                            </Button>
                            )}
                            {current > 0 && (
                            <Button
                                style={{
                                margin: '0 8px',
                                }}
                                onClick={() => prev()}
                            >
                                Previous
                            </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}