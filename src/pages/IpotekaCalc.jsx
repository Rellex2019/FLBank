import React, {useEffect, useState} from 'react';
import PageName from "../components/PageName";
import GreenInput from "../UI/Inputs/GreenInput";


import "../styles/Ipoteka.css";




const IpotekaCalc = () => {

    window.scroll({
        top: 200, behavior: "smooth"
    })
    const [procent, setProcent] = useState(10); // Управляйте procent с помощью хука useState
    const [summ, setSumm] = useState(100000);
    const [stavka, setStavka] = useState(15);
    useEffect(() => {
        updateMonthlyPayment(); // Пересчитайте procent при инициализации
    }, []);
    const updateMonthlyPayment = () => {
        const inputRange = document.querySelectorAll("#input_range");
        const amount = inputRange[0].value;
        const first_sum = inputRange[1].value;
        const months = inputRange[2].value * 12;

        const minus_stavka = first_sum / amount*10;
        console.log(stavka);

        const newProcent = (amount / months) + ((amount / 100 * stavka) /months);
        setProcent(Math.floor(newProcent)); // Обновите procent

        setSumm(Math.floor(amount- first_sum));
        let end = 15 - minus_stavka;
        setStavka(end.toFixed(1));
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
                            <GreenInput min={20000} max={summ/2} value={50000} updateMonthlyPayment={updateMonthlyPayment}/>
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
                                        <div className={'down_block_ip'}>{stavka}%</div>
                                    </div>
                                    <div className={"block_ip_sum"}>
                                        <div className={'up_block_ip'}>Ежемесячный платеж</div>
                                        <div className={'down_block_ip'}>{procent}Р</div>
                                    </div>
                                    <div className={"block_ip_sum"}>
                                        <div className={'up_block_ip'}>Налоговый вычет</div>
                                        <div className={'down_block_ip'}>650 000Р</div>
                                    </div>
                                </div>
                                <div className={"right-flex"}>
                                    <div className={"block_ip_sum"}>
                                        <div className={'up_block_ip'}>Сумма кредита</div>
                                        <div className={'down_block_ip'}>{summ}Р</div>
                                    </div>
                                    <div className={"block_ip_sum"}>
                                        <div className={'up_block_ip'}>Необходимый доход</div>
                                        <div className={'down_block_ip'}>{procent+15000}Р</div>
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