import { Link } from "react-router-dom";

export const Postcomp = ({feature}) => {
    console.log(feature.status);
    let first = feature.name.slice(0,1);
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
    return (
        <div className="post-comp-div lx">
            <div className="post-comp-color" style={{"background-color": color}}></div>
            <div className="lx lx-col space-between w-100-p post-comp-content">
                <div>
                    <div className="lx c-g-m baseline">
                        <span className="post-themekind">{category[feature.themeskind]}</span>
                        <span className="post-themecontent">{feature.name}</span>
                    </div>
                    <div className="lx c-g-s">
                        <span className="post-name">{feature.themescontent}</span>
                        <span className="post-city">{feature.city}, </span>
                        <span className="post-address">{feature.address}, </span>
                        <span className="post-phone">{feature.phone} ,</span>
                    </div>
                </div>
                <div className="lx space-between end">
                    <div>
                        <a className="viewport-a" href="#">View Post</a>
                        {feature.status ===0 ? "" : <Link to={"/chatroom/" + feature._id} className="viewport-a" href="#">ChatRoom</Link> }
                    </div>
                    <div>
                        <button style={{"background-color": color}} className="post-pending-btn">{feature.status === 0 ? "Pending" : "accepted" }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

