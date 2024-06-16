import React, { useState, useEffect } from 'react';
import GreenInput from "../UI/Inputs/GreenInput";
import PageName from "../components/PageName";

import "../styles/CreditCalc.css";

const CreditCalc = () => {
    window.scroll({
        top: 0, behavior: "smooth"
    })
    const [procent, setProcent] = useState(10); // Управляйте procent с помощью хука useState

    useEffect(() => {
        updateMonthlyPayment(); // Пересчитайте procent при инициализации
    }, []);

    const updateMonthlyPayment = () => {
        const inputRange = document.querySelectorAll("#input_range");
        const amount = inputRange[0].value;
        const months = inputRange[1].value;

        const newProcent = (amount / months) + (amount / 100 * 5);
        setProcent(Math.floor(newProcent)); // Обновите procent
    };

    return (
        <div>

            <PageName name={"Кредитный калькулятор"} desc={"Узнайте предварительные условия по кредиту и оплате"}/>

            <div className={"credit_container"}>
                <div className={"credit_back"}>
                    <div className={"credit_center"}>
                        <div className={"first_col"}>
                            <div className={"name_credit_block"}>Рассчитайте свой кредит</div>
                            <div className={"input_desc_one"}>Сколько вам нужно</div>
                            <GreenInput min={10000} value={1000000} max={2000000} updateMonthlyPayment={updateMonthlyPayment}/>
                            <div className={"input_desc_two"}>На срок в месяцах</div>
                            <GreenInput min={3} max={60} value={6} monts={true} updateMonthlyPayment={updateMonthlyPayment}/>
                            <div className={"warnings"}>
                                <div className={"one_warn"}>Предварительный расчет. Не является публичной офертой</div>
                                <div className={"two_warn"}>Ставка рассчитывается индивидуально. Полная информация о ставках и ПСК</div>
                            </div>
                        </div>
                        <div className={"second_col"}>
                            <div className={"month_pay"}>Ежемесячный платеж</div>
                            <div className={"money_pay"}>{procent}P</div>
                            <div className={"btn_req"}>Подать заявку</div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );


};

export default CreditCalc;