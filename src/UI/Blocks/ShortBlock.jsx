import React from 'react';
import './ShortBlock.css';
import ServiceButton from "../Buttons/ServiceButton";

const ShortBlock = (props) => {
    return (
        <div className={'short_block'}>
            <div className={"block_container_short"}>
                <div className={"block_one_short"}>
                    <div className={"name_block_short"}>{props.name}</div>
                    <div className={"desc_block_short"}>{props.desc}</div>

                </div>

                <div className={"block_two_short"}>
                    <div className={"btn_cont_short"}><ServiceButton/></div>
                    <div className={"img_cont_short"}><img className={"img_short"} alt={"картинка"} src={props.img}/></div>
                </div>
            </div>
        </div>
    );
};

export default ShortBlock;