import React from "react";
import "../styles/PageName.css";

const PageName = (props) => {
    return (
        <div>
            <div className={"page_container"}>
                <div className={"page_center"}>
                    <div className={"page_name"}>{props.name}</div>
                    <div className={"page_desc"}>{props.desc}</div>
                </div>
            </div>
        </div>
    );
};

export default PageName;