import React from 'react';
import PageName from "../components/PageName";
import GreenInput from "../UI/Inputs/GreenInput";


import "../styles/Ipoteka.css";




const IpotekaCalc = () => {

    window.scroll({
        top: 0, behavior: "smooth"
    })

    const updateMonthlyPayment = () => {
        const inputRange = document.querySelectorAll("#input_range");
        const amount = inputRange[0].value;
        const months = inputRange[1].value;

        const newProcent = (amount / months) + (amount / 100 * 5);
    };

    return (
        <div>
            <PageName name={"Ипотечный калькулятор"} desc={"Узнайте примерный платёж, ставку и другие предварительные условия по ипотеке"}/>
            <div className={"ipoteka_container"}>
                <div className={"ipoteka_center"}>
                    <div className={"ipoteka_block"}>
                        <div className={"block_one_ipoteka"}>
                            <div className={"your_city"}>Регион покупки недвижимости</div>
                            <input className={"city"} placeholder={"Москва"}/>
                            <div className={"your_city"}>Цель ипотеки</div>
                            <select className={"target"} value="1">
                                <option className={"target"} value="1">Квартира на вторичном рынке</option>
                                <option className={"target"} value="1">Купить дом</option>
                                <option className={"target"} value="1">Построить дом</option>
                                <option className={"target"} value="1">Квартира в новостройке</option>
                            </select>


                            <div className={"bonus_container"}>
                                <div className={"bonus_one"}>Базовая</div>
                                <div className={"bonus_two"}>Военная</div>
                                <div className={"bonus_three"}>Без первого взноса</div>
                            </div>
                            <div className={"home_cost"}>Стоимость недвижимости</div>
                            <GreenInput min={500000} max={15000000} value={3000000} updateMonthlyPayment={updateMonthlyPayment}/>
                            <div className={"first_cost"}>Первоначальный взнос</div>
                            <GreenInput min={20000} max={1000000} value={50000} updateMonthlyPayment={updateMonthlyPayment}/>
                            <div className={"home_cost"}>Срок ипотеки в годах</div>
                            <GreenInput min={1} max={30} value={3} updateMonthlyPayment={updateMonthlyPayment}/>

                            <div className={"warnings_ip"}>
                                <div className={"warn_ome_ip"}>Расчёт условий не является публичной офертой. Финальные
                                    условия кредитования
                                </div>
                                <div className={"warn_two_ip"}>определяются при заключении договора.</div>
                            </div>
                        </div>


                        <div className={"block_two_ipoteka"}>
                            <div className={"two_flex"}>
                                <div className={"left-flex"}>
                                    <div className={"block_ip_sum"}>
                                        <div className={'up_block_ip'}>Процентная ставка</div>
                                        <div className={'down_block_ip'}>15%</div>
                                    </div>
                                    <div className={"block_ip_sum"}>
                                        <div className={'up_block_ip'}>Ежемесячный платеж</div>
                                        <div className={'down_block_ip'}>40 000Р</div>
                                    </div>
                                    <div className={"block_ip_sum"}>
                                        <div className={'up_block_ip'}>Налоговый вычет</div>
                                        <div className={'down_block_ip'}>650 000Р</div>
                                    </div>
                                </div>
                                <div className={"right-flex"}>
                                    <div className={"block_ip_sum"}>
                                        <div className={'up_block_ip'}>Сумма кредита</div>
                                        <div className={'down_block_ip'}>2 300 000Р</div>
                                    </div>
                                    <div className={"block_ip_sum"}>
                                        <div className={'up_block_ip'}>Необходимый доход</div>
                                        <div className={'down_block_ip'}>54 000Р</div>
                                    </div>
                                </div>
                            </div>
                            <div className={'btn_summ'}>Получить одобрение</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IpotekaCalc;