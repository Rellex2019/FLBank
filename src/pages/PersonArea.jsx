import React from 'react';
import '../styles/PersonArea.css';

import Card from "../UI/svg/Card";
import Safe from "../UI/svg/Safe";
import Wallet from "../UI/svg/Wallet";

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
                    <div className={'right_block_person'}></div>
                </div>
            </div>

        </div>
    );
};

export default PersonArea;