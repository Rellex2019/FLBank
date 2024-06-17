import React from 'react';
import '../styles/PersonArea.css';

import Card from "../UI/svg/Card";
import Safe from "../UI/svg/Safe";
import Wallet from "../UI/svg/Wallet";
import Arrow from "../UI/svg/Arrow";
import AroundArrow from "../UI/svg/AroundArrow";

const PersonArea = () => {
    return (
        <div className={'person_area_container'}>
            <div className={'person_area_center'}>
                <div className={'context_container'}>
                    <div className={'left_block_person'}>
                        <div className={'wallet'}>
                            <div className={'block_wallet'}>
                                <div className={'name_block_wallet'}>Кошелек</div>
                                <div className={'plus'}>+</div>
                            </div>
                            <hr/>
                            <div className={'card_container'}>
                                <Card/>
                                <div className={'summ_container'}>
                                    <div className={'summ'}>10 000,10P</div>
                                    <div className={'summ_desc'}>Кредитная ***8789</div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'card_container'}>
                                <Card/>
                                <div className={'summ_container'}>
                                    <div className={'summ'}>10 000,10P</div>
                                    <div className={'summ_desc'}>Кредитная ***8789</div>
                                </div>
                            </div>
                            <hr/>



                            <div className={'block_wallet'}>
                                <div className={'name_block_wallet'}>Вклады и счета</div>
                                <div className={'plus'}>+</div>
                            </div>
                            <hr/>
                            <div className={'card_container'}>
                                <Safe/>
                                <div className={'summ_container'}>
                                    <div className={'summ'}>560 000,10P</div>
                                    <div className={'summ_desc'}>Эскроу(руб) ***5546</div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'card_container'}>
                                <Safe/>
                                <div className={'summ_container'}>
                                    <div className={'summ'}>47 070,10P</div>
                                    <div className={'summ_desc'}>Сберегательный счет **5002</div>
                                </div>
                            </div>
                            <hr/>


                            <div className={'block_wallet'}>
                                <div className={'name_block_wallet'}>Кредиты</div>
                                <div className={'plus'}>+</div>
                            </div>
                            <hr/>
                            <div className={'card_container'}>
                                <Wallet/>
                                <div className={'summ_container'}>
                                    <div className={'summ'}>150 000,10P</div>
                                    <div className={'summ_desc'}>Кредитная ***8669</div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'card_container'}>
                                <Wallet/>
                                <div className={'summ_container'}>
                                    <div className={'summ'}>20 000,10P</div>
                                    <div className={'summ_desc'}>Кредитная ***6789</div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className={'right_block_person'}>
                        <div className={'trans_container'}>
                            <div className={'check_container'}>
                                <div className={'expense_block'}>
                                    <div className={'text_expense'}>Расходы за июнь</div>
                                    <div className={"strip_container"}>
                                        <div className={'strip-one'}>200P</div>
                                        <div className={'strip-two'}>300P</div>
                                        <div className={'strip-three'}>800P</div>
                                        <div className={'strip-four'}>800P</div>
                                        <div className={'strip-five'}>100P</div>
                                        <div className={'strip-six'}>200P</div>
                                    </div>
                                </div>
                                <div className={'expense_block'}>
                                    <div className={'text_expense'}>Зачисления за июнь</div>
                                    <div className={"strip_container"}>
                                        <div className={'strip-one'}>200P</div>
                                        <div className={'strip-two'}>300P</div>
                                        <div className={'strip-three'}>800P</div>
                                        <div className={'strip-four'}>800P</div>
                                        <div className={'strip-five'}>100P</div>
                                        <div className={'strip-six'}>200P</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"filters_cont"}>
                            <div className={"filters"}>Тип операции <div className={'Arr'}>
                                <Arrow/></div></div>
                            <div className={"filters"}>Период
                                <div className={'Arr'}><Arrow/></div>
                            </div>
                            <div className={"filters"}>Карта или счет
                                <div className={'Arr'}><Arrow/></div>
                            </div>
                            <div className={"filters"}>Сумма
                                <div className={'Arr'}><Arrow/></div>
                            </div>
                        </div>
                        <div className={'days_container'}>
                            <div className={'day_name'}>Сегодня</div>
                            <div className={'person_container'}>
                                <div className={'connect'}>
                                    <div className={'around_arrow'}><AroundArrow/></div>
                                    <div className={'person_name_container'}>
                                        <div className={'person_name'}>Степан Денисович Д.</div>
                                        <div className={'operation_type'}>Входящий перевод</div>
                                    </div>
                                </div>

                                <div className={'money_change_plus'}>+100P</div>
                            </div>
                            <div className={'person_container'}>
                                <div className={'connect'}>
                                    <div className={'around_arrow'}><AroundArrow/></div>
                                    <div className={'person_name_container'}>
                                        <div className={'person_name'}>Степан Денисович Д.</div>
                                        <div className={'operation_type'}>Входящий перевод</div>
                                    </div>
                                </div>

                                <div className={'money_change_plus'}>+100P</div>
                            </div>
                            <div className={'person_container'}>
                                <div className={'connect'}>
                                    <div className={'around_arrow'}><AroundArrow/></div>
                                    <div className={'person_name_container'}>
                                        <div className={'person_name'}>Степан Денисович Д.</div>
                                        <div className={'operation_type'}>Входящий перевод</div>
                                    </div>
                                </div>

                                <div className={'money_change_plus'}>+100P</div>
                            </div>
                            <div className={'day_name'}>Вчера</div>
                            <div className={'person_container'}>
                                <div className={'connect'}>
                                    <div className={'around_arrow'}><AroundArrow/></div>
                                    <div className={'person_name_container'}>
                                        <div className={'person_name'}>Степан Денисович Д.</div>
                                        <div className={'operation_type'}>Входящий перевод</div>
                                    </div>
                                </div>

                                <div className={'money_change'}>100P</div>
                            </div>
                            <div className={'person_container'}>
                                <div className={'connect'}>
                                    <div className={'around_arrow'}><AroundArrow/></div>
                                    <div className={'person_name_container'}>
                                        <div className={'person_name'}>Степан Денисович Д.</div>
                                        <div className={'operation_type'}>Входящий перевод</div>
                                    </div>
                                </div>

                                <div className={'money_change'}>100P</div>
                            </div>
                            <div className={'person_container'}>
                                <div className={'connect'}>
                                    <div className={'around_arrow'}><AroundArrow/></div>
                                    <div className={'person_name_container'}>
                                        <div className={'person_name'}>Степан Денисович Д.</div>
                                        <div className={'operation_type'}>Входящий перевод</div>
                                    </div>
                                </div>

                                <div className={'money_change'}>100P</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PersonArea;