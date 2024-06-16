import React, {useState} from 'react';
import PageName from "../components/PageName";
import "../styles/Map.css"
const Map = () => {

    window.scroll({
        top: 0, behavior: "smooth"
    })

    const [selectedOption, setSelectedOption] = useState('option1');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>

            <PageName name={"Офисы и банкоматы"}
                      desc={"Узнайте примерный платёж, ставку и другие предварительные условия по ипотеке"}/>

            <div className={"map_container"}>
                <div className={"map_center"}>
                    <div className={"radio_container"}>
                        <div className={"first_radio"}>
                            <input type="radio" id="option1" name="radioGroup" value="option1"
                                   checked={selectedOption === 'option1'} onChange={handleChange}/>
                            <div className={"radio1_name"}>Для частных лиц</div>
                        </div>
                        <div className={"second_radio"}>
                            <input type="radio" id="option2" name="radioGroup" value="option2"
                                   checked={selectedOption === 'option2'} onChange={handleChange}/>
                            <div className={"radio2_name"}>Для юридических лиц</div>
                        </div>
                    </div>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Af7d7733f6935a5d3817b0bf5cb0520d9736f2c1a0e65ac2454955f678cb0f6f5&amp;source=constructor"
                        width="1170" height="560" frameBorder="0">
                    </iframe>
                </div>
            </div>


        </div>
    );
};

export default Map;