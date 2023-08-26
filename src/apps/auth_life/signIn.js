import "./index.css";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Divider, Form, Input } from "antd";

import { actions } from "../../redux/slices/auth";
import { formContext, imageContext } from "../../redux/context";

const SignIn = () => {
    const dispatch = useDispatch(),
    form = useContext(formContext).state,
    image = useContext(imageContext).state;

    const handleSubmit = values => dispatch(actions.signInStart(values));

    const onFinishFailed = errorInfo => {
        console.log("failed:", errorInfo);
    };

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
                        name="lifeForm"
                        initialValues = {{remember: true}}
                        onFinish = {handleSubmit}
                        onFinishFailed = {onFinishFailed}
                        autoComplete = "off"
                    >
                        <p className="text-center font-size-m">Sign In</p>
                        <span className="link-div">
                            <div className="each-link">
                                <a href="https://facebook.com">
                                    <img src={image.facebook} alt="Google" />
                                </a>
                            </div>
                            <div className="each-link">
                                <a href="https://accounts.google.com">
                                    <img src={image.googleImage} alt="Linkedin" />
                                </a>
                            </div>
                           <div className="each-link">
                                <a href="https://linkedin.com">
                                    <img src={image.apple} alt="Linkedin" />
                                </a>
                           </div>
                        </span>
                        <div className="via-email-div mt-30  relative">
                            <div className = "via-span pl-20 pr-20 absolute">or Via email</div>
                        </div>
                        <div className="via-email-content">
                            <p>Email</p>
                            <Form.Item name="email" rules={form.emailRule}>
                                <Input className="signin-input" placeholder="Anyone123@gmail.com"/>
                            </Form.Item>
                            <p>Password</p>
                            <Form.Item name="password" rules={form.passwordRule}>
                                <Input.Password className="signin-input" placeholder="Enter your Password"/>
                            </Form.Item>
                        </div>
                        <div className="lx w-60-p margin-auto">
                            <div>
                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <div>
                                    Not have an account?
                                    <a href="/signup" >Sign Up</a>
                                </div>
                            </div>
                            <div className="lx end flex-end flex-auto">
                                <button type="submit" className="signin-btn">Sign In</button>
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


export default SignIn;