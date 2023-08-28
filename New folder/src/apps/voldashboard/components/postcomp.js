import { Link } from "react-router-dom";

export const Postcomp = (props, {feature}) => {
    let first = props.feature.name.slice(0,1);
    let color = "";
    const category = [
        "Technological",
        "Walk outside",
        "Help at home",
        "Medicine",
        "See a doctor",
        "Meeting",
        "Shopping",
        "Other"
    ];
    if (first > 'a' && first < 'g') {
        color = "#79edbe";
    }
    else if (first > 'f' && first < 'm') {
        color = "#63cbfe";
    }
    else if (first > "l" && first < 's') {color = "#fed4e7";}
    else color = "#fc3791";
    
    const taking = (e) => {
        props.taking("taking"+e.target.id);
    }
    const unsetTaking = (e) => {
        props.taking("untaking"+e.target.id);
    }
    return (
        <div className="post-comp-div lx">
            <div className="post-comp-color" style={{"background-color": color}}></div>
            <div className="lx lx-col space-between w-100-p post-comp-content">
                <div>
                    <div className="lx c-g-m baseline">
                        <span className="post-themekind">{category[props.feature.themeskind]}</span>
                        <span className="post-themecontent">{props.feature.name}</span>
                    </div>
                    <div className="lx c-g-s">
                        <span className="post-name">{props.feature.themescontent}</span>
                        <span className="post-city">{props.feature.city}, </span>
                        <span className="post-address">{props.feature.address}, </span>
                        <span className="post-phone">{props.feature.phone} ,</span>
                    </div>
                </div>
                <div className="lx space-between end">
                    <div>
                        <a className="viewport-a" href="#">View Post</a>
                        {props.feature.status != 0 ? <button id={props.feature._id} onClick={unsetTaking} className="viewport-btn" href="#">Cancel</button> : "" }
                        {props.feature.status ===0 ? "" : <Link to={"/chatroom/" + props.feature._id} className="viewport-a" href="#">ChatRoom</Link> }

                    </div>
                    <div>
                        {props.feature.status == 0 ? <button id={props.feature._id} style={{"background-color": "dodgerblue"}} onClick={taking} className="post-taking-btn">Taking</button> : "" }
                        <button style={{"background-color": color}} className="post-pending-btn">{props.feature.status == 0 ? "Pending" : "Approved"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

