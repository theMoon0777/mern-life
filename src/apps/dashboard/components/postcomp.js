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
            <div className="post-comp-color" style={{"background-color": color}}>

            </div>
            <div>
                {feature.name}
            </div>
        </div>
    )
}

