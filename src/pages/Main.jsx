import React from "react";
import FirstBanner from "../components/FirstBanner";
import ServicesList from "../components/ServicesList";
const Main = () => {
    window.scroll({
        top: 0, behavior: "smooth"
    })
    return (
    <div>
        <FirstBanner/>
        <ServicesList/>
    </div>
    );
};

export default Main;