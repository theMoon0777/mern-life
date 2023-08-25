export const FirthStep = (props) => {
    const submit = (e) => {
        props.send(e.target.value);
    }

    return (
        <div style={{"line-height": "0px"}}>
            <h1 className="step-h">Step 4</h1>
            <h2 className="step-h black">When will be the party?</h2>
            <div className="group1">      
                <input className="input1" value={props.data} onChange={submit} type="date" required />
               
            </div>
        </div>
    )
}