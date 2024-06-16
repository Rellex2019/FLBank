import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


import Main from "./pages/Main";
import CreditCalc from "./pages/CreditCalc"
import IpotekaCalc from "./pages/IpotekaCalc";
import Map from "./pages/Map";

import Logo from "./UI/svg/Logo";
import LogoFooter from "./UI/svg/Logo_Footer";
import '../src/styles/Navbar.css';
import './styles/fonts.css';
import './styles/Footer.css';
import Search from "./UI/svg/Search";

function App() {
  return (
      <div>
      <BrowserRouter>
          <div className={"nav_container"}>
              <div className={"flex_container"}>
                  <div className={"first_block"}>
                      <Link to={'/'}><Logo/></Link>
                      <div className={"nav_elem"} id={"private"}>
                          Частным клиентам
                          <div className={"down_menu"}>
                              <div className={"menu"}>
                                  <div className={"menu_elem"}>Карты</div>
                                  <div className={"menu_elem"}>Вклады</div>
                                  <div className={"menu_elem"}><Link to={'/credit'}>Кредиты</Link></div>
                                  <div className={"menu_elem"}>Переводы</div>
                              </div>
                          </div>
                      </div>
                      <div className={"nav_elem"} id={"business"}>
                          Бизнесу
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
                      <div className={"nav_elem"}><Link to={'/map'}>Банкоматы</Link></div>
                      <div className={"nav_elem"}>Онлайн банкинг</div>
                  </div>
              </div>
          </div>

          {/*Pages*/}

          <Routes>
            <Route path="/" element={<Main/>}/>
              <Route path="/credit" element={<CreditCalc/>}/>
              <Route path="/ipoteka" element={<IpotekaCalc/>}/>
              <Route path="/map" element={<Map/>}/>
          </Routes>


          {/*Footer*/}
          <div className={"footer_container"}>
              <div className={"footer"}>
              <div className={"foot_elem_one"}><LogoFooter/></div>
              <div className={"foot_elem_two"}>
                  <div className={"first_string"}>
                      <div className={"one_elem"}>Новости</div>
                      <div className={"two_elem"}>О банке</div>
                      <div className={"three_elem"}><Link to={'/map'}>Банкоматы</Link></div>
                      <div className={"four_elem"}>Вопросы и ответы</div>
                      <div className={"five_elem"}><Link to={'/credit'}>Кредитный калькулятор</Link></div>
                      <div className={"six_elem"}>+7(996)-912-15-69</div>
                  </div>
                  <div className={"second_string"}>
                  <div className={"one_elem"}>Курсы валют</div>
                      <div className={"two_elem"}><Link to={'/ipoteka'}>Ипотечный калькулятор</Link></div>
                  </div>
              </div>
              <div className={"foot_elem_three"}>
                  Россия, Астрахань 414011 ул.Медиков <br/>
                  © 2024—2025 ПАО FinanceLineBank.</div>
              <div className={"foot_elem_four"}>
                  <div className={"first_string_end"}>
                      <div className={"one_license"}>
                          Генеральная лицензия Банка России на осуществление банковских <br/>
                          операций №1481 от 11.08.2015 г.
                      </div>
                      <div className={"two_license"}>
                          Информация о процентных ставках по договорам банковского <br/>
                          вклада с физическими лицами
                      </div>
                  </div>
                  <div className={"second_string_end"}>
                      Информация, обязательная к <br/> размещению
                  </div>
              </div>
            </div>
          </div>
      </BrowserRouter>


      </div>
  );
}

export default App;
