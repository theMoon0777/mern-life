import { Select } from 'antd';

export const ThirdStep = (props) => {

    console.log(props);
    const submit = (e) => {
        props.send(e.target.value);
    }

    const onChange = (value) => {
        props.send(value);

      };
      const onSearch = (value) => {
        console.log('search:', value);
      };

    return (
        <div style={{"line-height": "0px"}}>
            <h1 className="step-h">Step 3</h1>
            <h2 className="step-h black">What is the theme for your event?</h2>
            <div className="radio-group">
            <Select
                showSearch
                value = {props.kind}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                {
                    value: 0,
                    label: 'Technological',
                },
                {
                    value: 1,
                    label: 'Walk outside',
                },
                {
                    value: 2,
                    label: 'Help at home',
                },
                {
                    value: 3,
                    label: 'Medicine',
                },
                {
                    value: 4,
                    label: 'See a doctor',
                },
                {
                    value: 5,
                    label: 'Meeting',
                },
                {
                    value: 6,
                    label: 'Shopping',
                },
                {
                    value: 7,
                    label: 'Other',
                }
                ]}
            />
            </div>
            <div className="group1">      
                <input className="input1" value={props.content} onChange={submit} type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Theme Content</label>
            </div>
        </div>
    )
}