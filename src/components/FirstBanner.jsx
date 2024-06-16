import React from 'react';
import './src/styles/banners.css';

const FirstBanner = () => {
    return (
        <div>
            <div className={"banner_container"}>
                <div className={"text container"}>
                    <div className={"text_elem_one"}>Кэшбек</div>
                    <div className={"text_elem_two"}>на развлечения</div>
                    <div className={"text_elem_three"}>и рестораны</div>
                    <div className={"text_elem_four"}>в международный</div>
                    <div className={"text_elem_five"}>женский день</div>
                    <div className={"text_elem_six"}></div>
                </div>
                <div className={"photo"}>
                    <div className={"photo_elem"}></div>
                </div>
            </div>
        </div>
    );
};

export default FirstBanner;