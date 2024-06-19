import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


import Main from "./pages/Main";
import CreditCalc from "./pages/CreditCalc"
import IpotekaCalc from "./pages/IpotekaCalc";
import Map from "./pages/Map";
import PersonArea from "./pages/PersonArea";


import burger from "./UI/svg/burger";
import Logo from "./UI/svg/Logo";
import LogoFooter from "./UI/svg/Logo_Footer";
import '../src/styles/Navbar.css';
import './styles/fonts.css';
import './styles/Footer.css';
import './styles/mobile.css';
import Search from "./UI/svg/Search";
import Burger from "./UI/svg/burger";


function App() {
  return (
      <div>
      <BrowserRouter>
          <div className={"nav_container"}>
              <div className={"flex_container"}>
                  <div className={"first_block"}>
                      <Link to={'/'}><Logo/></Link>
                      <div className={"nav_elem"} id={"private"}>
                          <div className={'client_type'}>Частным клиентам</div>
                          <div className={"down_menu"}>
                              <div className={"menu"}>
                                  <div className={"menu_elem"}><Link to={'/person-area'}>Карты</Link></div>
                                  <div className={"menu_elem"}><Link to={'/person-area'}>Вклады</Link></div>
                                  <div className={"menu_elem"}><Link to={'/credit'}>Кредиты</Link></div>
                                  <div className={"menu_elem"}><Link to={'/person-area'}>Переводы</Link></div>
                              </div>
                          </div>
                      </div>
                      <div className={"nav_elem"} id={"business"}>
                          <div className={'client_type'}>Бизнесу</div>
                          <div className={"down_menu2"}>
                              <div className={"menu2"}>
                                  <div className={"menu_elem"}>Расчетный счет</div>
                                  <div className={"menu_elem"}>Зарплатный проект</div>
                                  <div className={"menu_elem"}><Link to={'/credit'}>Кредитование</Link></div>
                              </div>
                          </div>
                      </div>
                      <div className={"search_field"}>
                          <Search colo={"#171B2A"} />
                          <input className={"search_input"}/>
                      </div>

                  </div>
                  <div className={"last_block"}>
                      <div className={'cont_burger'}><Burger/></div>
                      <div className={"nav_elem"}><Link to={'/map'}>Банкоматы</Link></div>
                      <div className={"nav_elem"} id={'enter'}>
                          <div className={"hidden_enter"}>
                              <div className={'inside'}>
                                  <div className={'num_card'}>Введите номер вашей карты</div>
                                  <input className={"input"} type={"number"}/>
                                  <div className={'pass'}>Введите ваш пароль</div>
                                  <input className={"input"} type={"password"}/>
                                  <Link to={'/person-area'}><button className={"btns"}>Войти в аккаут</button></Link>
                                  <button className={"btns"}>Завести новую карту</button>
                              </div>
                          </div>
                          Онлайн банкинг</div>
                  </div>
              </div>
          </div>

          {/*Pages*/}

          <Routes>
            <Route path="/" element={<Main/>}/>
              <Route path="/credit" element={<CreditCalc/>}/>
              <Route path="/ipoteka" element={<IpotekaCalc/>}/>
              <Route path="/map" element={<Map/>}/>
              <Route path="/person-area" element={<PersonArea/>}/>
          </Routes>


          {/*Footer*/}
          <div className={"footer_container"}>
              <div className={"footer"}>
              <div className={"foot_elem_one"}><LogoFooter/></div>
              <div className={"foot_elem_two"}>
                  <div className={"first_string"}>
                      <div className={"one_elem"}><Link to={'/'}> Новости </Link></div>
                      <div className={"two_elem"}>О банке</div>
                      <div className={"three_elem"}><Link to={'/map'}>Банкоматы</Link></div>
                      <div className={"four_elem"}><a href={'https://www.sberbank.ru/ru/person/help'}>Вопросы и ответы</a> </div>
                      <div className={"five_elem"}><Link to={'/credit'}>Кредитный калькулятор</Link></div>
                      <div className={"six_elem"}>+7(996)-912-15-69</div>
                  </div>
                  <div className={"second_string"}>
                      <div className={"one_elem"}><a href={'https://www.cbr.ru/currency_base/daily/'}>Курсы валют</a></div>
                      <div className={"two_elem"}><Link to={'/ipoteka'}>Ипотечный калькулятор</Link></div>
                  </div>
              </div>
              <div className={"foot_elem_three"}>
                  Россия, Астрахань 414011 ул.Медиков <br/>
                  © 2024—2025 ПАО FinanceLineBank.</div>
              <div className={"foot_elem_four"}>
                  <div className={"first_string_end"}>
                      <div className={"one_license"}>
                          <a href={'http://www.sberbank.ru/common/img/uploaded/files/el_docs/licence_sberbank.pdf'}> Генеральная лицензия Банка России на осуществление банковских <br/>
                          операций №1481 от 11.08.2015 г.</a>
                      </div>
                      <div className={"two_license"}>
                         <a href={'https://www.sberbank.com/ru/investor-relations/ras_vklad'}>Информация о процентных ставках по договорам банковского <br/>
                          вклада с физическими лицами</a>
                      </div>
                  </div>
                  <div className={"second_string_end"}>
                      <a href={'https://www.sberbank.ru/ru/inform'}> Информация, обязательная к <br/> размещению</a>
                  </div>
              </div>
            </div>
          </div>
      </BrowserRouter>


      </div>
  );
}

export default App;
