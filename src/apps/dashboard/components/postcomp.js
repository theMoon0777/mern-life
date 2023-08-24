export const Postcomp = ({feature}) => {
    let first = feature.name.slice(0,1);
    let color = "";
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
                        <span className="post-themekind">{feature.name}</span>
                        <span className="post-themecontent">{feature.name}</span>
                    </div>
                    <div className="lx c-g-s">
                        <span className="post-name">{feature.name}</span>
                        <span className="post-city">{feature.name}</span>
                        <span className="post-address">{feature.name}</span>
                        <span className="post-phone">{feature.name}</span>
                    </div>
                </div>
                <div className="lx space-between end">
                    <div>
                        <a className="viewport-a" href="#">View Post</a>
                    </div>
                    <div>
                        <button style={{"background-color": color}} className="post-pending-btn">Pending</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

