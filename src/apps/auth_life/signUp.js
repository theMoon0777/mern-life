import "./index.css";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Select, Form, Input } from "antd";
import {useState} from "react";

import { actions } from "../../redux/slices/auth";
import * as context from "../../redux/context";

const {Option} = Select;

const SignUp = () => {

    const [signupflag, setSignupflag] = useState(false);
    const changeState = (e) => {
        let flag = (signupflag) ? false : true;
        setSignupflag(flag);
    };

    const dispatch = useDispatch(),
    formRules = useContext(context.formContext).state,
    texts = useContext(context.textContext).state,
    image = useContext(context.imageContext).state,
    [form] = Form.useForm();

    const onFinish = values => {
        dispatch(actions.signUpStart(values));
    }

    return (
        <div className="signin-container">
            <div className="signin-main">
                <div className="signin-form-container">
                    <div>
                        <span>
                            <img className="form-avatar" src={image.helpMe} alt = "loading" />
                        </span>
                    </div>
                    <Form
                        form = {form}
                        name="lifeForm"
                        onFinish = {onFinish}
                        scrollToFirstError
                    >
                        <p className="text-center font-size-m">Ready to start?</p>

                        <div className="via-email-content">
                            <Form.Item name="name" rules={formRules.nameRule}>
                                <div className="group">      
                                    <input className="input" type="text" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Full Name</label>
                                </div>
                            </Form.Item>
                            <Form.Item name="email" rules={formRules.emailRule}>
                                <div className="group">      
                                    <input className="input" type="text" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Email</label>
                                </div>
                            </Form.Item>
                           
                            <Form.Item name="password" rules={formRules.passwordRule}>
                                <div className="group">      
                                    <input className="input" type="password" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Password</label>
                                </div>
                            </Form.Item>
                            <Form.Item
                                name="confirm"
                                dependencies={["password"]}
                                hasFeedback
                                rules={[
                                    ...formRules.confirmRule,
                                    ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                        }
                                        return Promise.reject(new Error(formRules.confirmMatch));
                                    },
                                    }),
                                ]}
                                >
                                <div className="group">      
                                    <input className="input" type="password" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Confirm Password</label>
                                </div>
                            </Form.Item>
                            <Form.Item name="level" rules={formRules.levelRule}>
                                <Select >
                                    <Option value="creator">Elderly</Option>
                                    <Option value="brand">Volunteer</Option>
                                </Select>
                            </Form.Item>
                        </div>
                       
                        <div className="w-60-p margin-auto pt-20">
                            <input type="checkbox" value={signupflag} onChange={changeState} />
                            <span>I agree to the <a>Terms & Conditions</a></span>
                        </div>
                        <div className="lx w-60-p margin-auto pt-20">
                            <Form.Item>
                                <button 
                                    disabled = {!signupflag} 
                                    type="submit" 
                                    className="signin-btn"
                                    style={{opacity: !signupflag? 0.5: 1 }}>
                                    Sign Up
                                </button>
                            </Form.Item>
                                
                            <div className="lx end flex-end flex-auto mb-20">
                                <span>Have got an account?</span><a className="font-size-s" href="/signin">Sign In</a>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="signin-shake">
                    <img className="shake-form-img" src={image.shake} alt="loading.." />
                </div>
            </div>
        </div>
    );
};


export default SignUp;