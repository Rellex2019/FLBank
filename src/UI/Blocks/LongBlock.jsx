import React from 'react';
import './LongBlock.css'
import ServiceButton from "../Buttons/ServiceButton";

const LongBlock = (props) => {
    return (
        <div className={"LongBlock"}>
            <div className={"block_container"}>
                <div className={"block_one"}>
                    <div className={"name_block"}>{props.name}</div>
                    <div className={"desc_block"}>{props.desc}</div>
                    <div className={"btn_cont_long"}><ServiceButton border={'#171B2A'}/></div>
                </div>
                <div className={"block_two"}><img className={"img_block"} src={props.img}/></div>
            </div>
        </div>
    );
};

export default LongBlock;