export const FirstStep = (props) => {
    const submit = (e) => {
        props.send(e.target.value);
    }

    return (
        <div style={{"line-height": "0px"}}>
            <h1 className="step-h">Step 1</h1>
            <h2 className="step-h black mb-20">What's your Name?</h2>
            <div className="group1">      
                <input className="input1" value={props.data} onChange={submit} type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Full Name</label>
            </div>
        </div>
    )
}