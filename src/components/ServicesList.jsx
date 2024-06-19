import React from 'react';
import '../styles/Services.css'

import LongBlock from "../UI/Blocks/LongBlock";
import ShortBlock from "../UI/Blocks/ShortBlock";
import OpacityBlock from "../UI/Blocks/OpacityBlock";
import Arrow from "../UI/svg/Arrow";
import Presentation from "../img/Presentation.pdf";

import Card from '../img/card.png';
import Delivery from '../img/UpArrow.png';
import Procent from '../img/procent.png';
import Benefit from '../img/Benefit.png';
import Credit from '../img/credits.png';
import Android from '../img/android.png';
import Iphone from '../img/iphone.png';
import Bank from '../img/bank.png';

const ServicesList = () => {
    return (
        <div>
            <div className={"service_container"}>
                <div className={"service"}>
                    <div className={"row_one"}>Лучшее предложение</div>
                    <div className={"row_two"}>
                        <div className={"filter_one"}>Финансы</div>
                        <div className={"filter_two"}>Родителям и детям</div>
                        <div className={"filter_three"}>Зарплатным клиентам</div>
                        <div className={"filter_four"}>Молодёжи</div>
                    </div>
                    <div className={"row_three"}>
                        <LongBlock name={"Кредитная FLineКарта"} desc={"120 дней без процентов и оплаты обслуживания"} img={Card}/>
                        <LongBlock name={"FLineКарта с доставкой\n" +
                            "от 15 минут"} desc={"Самый быстрый способ получить\n" +
                            "дебетовую карту в 100+ городах\n" +
                            "России"} img={Delivery}/>
                    </div>
                    <div className={"row_four"}>
                        <ShortBlock name={"Кредит на любые цели"} desc={"До 500 000 рублей"} img={Bank}/>
                        <div className={'mob_none'}><ShortBlock name={"Вклад «Лучший %»"} desc={"Получите до 16% годовых на ваши\n" + "сбережения"} img={Procent}/></div>
                        <ShortBlock name={"Тройная выгода для ваших\n" + "сбережений"} desc={"Получите софинансирование\n" + "до 36 000 ₽ в год, налоговый вычет\n" + "и инвестиционный доход"} img={Benefit}/>
                    </div>
                </div>
            </div>

            <div className={"actual_container"}>
                <div className={"actual_block"}>
                    <div className={"actual_row_one"}>Актуально сейчас</div>
                    <div className={"actual_row_two"}>
                        <OpacityBlock name={"Приложение FLineБанк\n" + "Онлайн для Андроид"} desc={"Скачайте или обновите приложение и управляйте личными финансами онлайн"} img={Android}/>
                        <OpacityBlock name={"Поможем установить приложение на iPhone"} desc={"Приходите в офис банка, загрузим приложение для доступа к Онлайн банкингу"} img={Iphone}/>
                    </div>
                </div>
            </div>


            <div className={"news_container"}>
                <div className={"news_block"}>
                    <div className={"header_cont"}>
                        <div className={"name_string"}>Новости</div>
                        <div className={"name_next"}><a href={Presentation}>Все новости</a>  <Arrow/></div>
                    </div>


                    <div className={"news"}>
                        <div className={"news_col_one"}>
                            <div className={"news_date"}>6 июнь 2024</div>
                            <div className={"news_desc"}>Оператор платёжной системы «Мир»
                                признал высочайший уровень
                                киберзащиты клиентов FLBank</div>
                        </div>
                        <div className={"news_col_two"}>
                            <div className={"news_date"}>7 июнь 2024</div>
                            <div className={"news_desc"}>Страны БРИКС заинтересовались
                                опытом FLBank в сфере обеспечения
                                кибербезопасности</div>
                        </div>
                        <div className={"news_col_three, mob_none"}>
                            <div className={"news_date"}>8 июнь 2024</div>
                            <div className={"news_desc"}>GigaГОД! C днём рождения, GigaChat!</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ServicesList;