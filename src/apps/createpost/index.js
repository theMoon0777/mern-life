import "./index.css";
import { imageContext } from "../../redux/context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import {FirstStep} from  "./firstStep";
import {SecondStep} from  "./secondStep";
import {ThirdStep} from  "./thirdStep";
import {FirthStep} from  "./firthStep";
import {LastStep} from  "./lastStep";
import {actions}  from "../../redux/slices/post";
import { useDispatch } from "react-redux";

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
    const [themeskind, setThemeskind] = useState(0);
    const [themescontent, setThemescontent] = useState("");
    const [date, setDate] = useState("");
    const [address , setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const image = useContext(imageContext).state;

    const dispatch = useDispatch();

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
    const storetheme = (theme) => {
        if(Number.isInteger(theme)) {
            console.log("kind" + theme);
            setThemeskind(theme);
        }
        else {
            console.log("content" + theme);
            setThemescontent(theme)
        }
    }
    const storedate = (data) => {
        setDate(data);
    }
    const storeaddress = (data) => {
        setAddress(data)
    }
    const storephone = (data) => {
        setPhone(data);
    }
    const saveData = () => {
        let data = {
            name,
            member,
            themeskind,
            themescontent,
            date,
            address,
            phone
        };
        dispatch(actions.createPostStart(data));
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
                        <div style={contentStyle}>{steps[current].content=="First-content" ? <FirstStep send={storename} data={name}/> : steps[current].content=="Second-content" ? <SecondStep send={storemember} data={member} /> : steps[current].content=="Third-content" ? <ThirdStep kind = {themeskind} content = {themescontent} send={storetheme}/> :  steps[current].content=="Firth-content" ? <FirthStep data = {date} send = {storedate} /> : steps[current].content=="Last-content" ? <LastStep addressFun = {storeaddress} phoneFun = {storephone} address = {address} phone = {phone} /> : "" }</div>
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
                            <Button type="primary" onClick={saveData}>
                                Finally Save
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