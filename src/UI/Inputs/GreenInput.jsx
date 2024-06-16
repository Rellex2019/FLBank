import React from 'react';
import './GreenRange.css'

const GreenInput = (props) => {
    let minStage = props.min;
    let maxStage = props.max;
    let month = props.month;
    let [value, setValue] = React.useState(props.value);
    const {updateMonthlyPayment } = props;
    let handleChange = ()=>{};


    const handleSliderChange = (event) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        updateMonthlyPayment();
    };

    handleChange = (event) => {
        setValue(event.target.value);
        updateMonthlyPayment();
    }

    const greenBackgroundWidth = (value) => {
        return `${value /(maxStage / 100)-0.5}%`;
    };
            return (
            <div className="slider_container">
                <div className={"input_container"}>

                    <input className={"number_green"} id={"input_range"}  type="number" value={value} onChange={handleSliderChange}/>
                    <input className={"range_green"} style={{backgroundSize: greenBackgroundWidth(value) }} type="range" min={minStage} max={maxStage} value={value}
                           onChange={handleChange}/>
                </div>

            </div>
            );
};

export default GreenInput;