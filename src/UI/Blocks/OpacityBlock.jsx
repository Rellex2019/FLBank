import React from 'react';
import "./OpacityBlock.css"
import ServiceButton from "../Buttons/ServiceButton";

const OpacityBlock = (props) => {
    return (
            <div className={"OpacityBlock"}>
                <div className={"block_container_op"}>
                    <div className={"block_one_op"}>
                        <div className={"name_block_op"}>{props.name}</div>
                        <div className={"desc_block_op"}>{props.desc}</div>
                        <div className={"btn_cont_long_op"}><ServiceButton border={'#171B2A'}/></div>
                    </div>
                    <div className={"block_two_op"}><img className={"img_op"} src={props.img}/></div>
                </div>
            </div>
    );
};

export default OpacityBlock;