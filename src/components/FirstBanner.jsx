import React from 'react';
import '../styles/banners.css';
import BannerImage from '../img/banner.png'
import TextLogo from '../UI/svg/TextLogo.jsx';
import Cashback from "../img/cashback.png";
const FirstBanner = () => {
    return (
        <div>
            <div className={"banner_container"}>
                <div className={"center_container"}>
                    <div className={"text_container"}>
                        <div className={"text_elem_one"}>Кэшбек</div>
                        <div className={"text_elem_two"}>на развлечения</div>
                        <div className={"text_elem_three"}>и рестораны</div>
                        <div className={"text_elem_four"}>в международный</div>
                        <div className={"text_elem_five"}>женский день</div>
                        <div className={"text_elem_six"}><TextLogo/></div>
                    </div>
                    <div className={"photo"}>
                        <img src={Cashback} className={"photo_elem"}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstBanner;