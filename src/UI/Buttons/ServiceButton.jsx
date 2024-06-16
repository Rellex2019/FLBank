import React from 'react';
import Arrow from "../svg/Arrow";
import './ServiceButton.css';
const ServiceButton = (props) => {
    return (
        <div className={"btn_cont"} >
            <div className={"btn"} style={{border: '1px solid' + props.border}}>
                <Arrow fill={"#171B2A"}/>
            </div>
        </div>

    );
};

export default ServiceButton;