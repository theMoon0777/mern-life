export const SecondStep = (props) => {
    const submit = (e) => {
        props.send(e.target.value);
    }

    return (
        <div style={{"line-height": "0px"}}>
            <h1 className="step-h">Step 2</h1>
            <h2 className="step-h black">How many participans?</h2>
            <div className="group1">      
                <input className="input1" value={props.data} onChange={submit} type="number" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Paticipants Number</label>
            </div>
        </div>
    )
}