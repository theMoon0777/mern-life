import { useContext } from "react";
import { imageContext } from "../../redux/context";

export const LastStep = (props) => {
    const image = useContext(imageContext).state;
    console.log(props);
    const submit = (e) => {
        props.addressFun(e.target.value);
    }
    const submit1 = (e) => {
        props.phoneFun(e.target.value);
    }
    return (
        <div className="lx space-between" style={{"line-height": "0px"}}>
            <div>
                <img src={image.girl} alt = "..loading" />
            </div>
            <div>
                <h1 className="step-h">Step 5</h1>
                <h2 className="step-h">Congratulations! Keep going. This is the last Step.</h2>
                <h2 className="step-h black">Where will the event be?</h2>
                <div>
                    <div className="group1">      
                        <input className="input1" value={props.address} onChange={submit} type="text" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Address</label>
                    </div>
                    <div className="group1">      
                        <input className="input1" placeholder = "only numbers" value={props.phone} onChange={submit1} type="text" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Phone Number</label>
                    </div>
                </div>
            </div>
            <div>
                <img src={image.guy} alt = "..loading" />
            </div>
        </div>
    )
}