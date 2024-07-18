import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import './Header.css'
import { useState } from "react";
import { useInfoContext } from "../../context/authContext";

export default function Header() {
    const path = useLocation().pathname;
    const [burger, setBurger] = useState(false);
    const toggle = () => setBurger(!burger);
    const { exit, currentUser } = useInfoContext();
    const navigate = useNavigate();

    const handleDropdownClick = (option) => {
        if (option === 'orders') {
            navigate('/orders');
        } else if (option === 'profile') {
            navigate('/profile');
        }
    };

    const handleCartClick = () => {
        navigate('/layout');
    };

    return (
        <>
            <header>
                <div className="container">
                    {path === '/' && <div className="header__top">
                        <div className="top-box">
                            <div className="header__location">
                                <img
                                    src="https://pizza-site-off.netlify.app/static/media/location.bcfd89040885d364f942df2c3dda8f15.svg"
                                    alt="Location"
                                />
                                <p>Москва</p>
                            </div>
                            <p className="none">Проверить адрес</p>
                            <p className="none">Среднее время доставки*: <strong>00:24:19</strong></p>
                        </div>
                        <div className="header__delivery-time">
                            <p className="media">Среднее время доставки*: <strong>00:24:19</strong></p>
                            <p className="none">Время работы: с 11:00 до 23:00</p>
                            {currentUser ?
                                <NavLink onClick={exit} className="header__location none">
                                    <i style={{ marginRight: '10px' }} className="fa-solid fa-right-from-bracket"></i>
                                    <p>Log Out</p>
                                </NavLink>
                                : <NavLink to='/register' className="header__location none">
                                    <i style={{ marginRight: '10px' }} className="fa-solid fa-user"></i>
                                    <p>Войти в аккаунт</p>
                                </NavLink>}
                        </div>
                    </div>}
                    <div className="header__main">
                        <div className="nav__blox">
                            <div className="hed__box2">
                                <Link to='/'>
                                    <img src="https://pizza-site-off.netlify.app/static/media/logos.cb06518345f8aac5b966c310bfa2884d.svg" alt="" />
                                    Куда пицца
                                </Link>
                            </div>
                            {path !== '/' && <div className="nav__box">
                                <NavLink to='/'><a href="">Акции</a></NavLink>
                                <NavLink to='/pissa'><a href="">Пицца</a></NavLink>
                                <NavLink to='/sushi'><a href="">Суши</a></NavLink>
                                <NavLink to='/water'><a href="">Напитки</a></NavLink>
                                <NavLink to='/zakuska'><a href="">Закуски</a></NavLink>
                                <NavLink to='/kombo'><a href="">Комбо</a></NavLink>
                                <NavLink to='/desert'><a href="">Десерты</a></NavLink>
                                <NavLink to='/souse'><a href="">Соусы</a></NavLink>
                                <li className="dropdown">
                                    <button className="dropbtn">Другое</button>
                                    <div className="dropdown-content">
                                        <button onClick={() => handleDropdownClick('orders')}>История заказов</button>
                                        <button onClick={() => handleDropdownClick('profile')}>Настройки</button>
                                    </div>
                                </li>
                            </div>}
                            <div className="hed__box1">
                                <button className="hed__btn none" onClick={handleCartClick}>
                                    <i className="fa-solid fa-cart-shopping"></i>0<i className="fa-solid fa-ruble-sign"></i>
                                </button>
                                <button className="media__btn" onClick={toggle}>
                                    {burger ? <i class="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {burger && <section className='hamburger'>
                <div className="account">
                    <img src="./images/img1.png" alt="" />
                    <p>Войти в аккаунт</p>
                </div>
                <ul>
                    <li>Акции</li>
                    <li>О компании</li>
                    <li>Пользовательское соглашение</li>
                    <li>Условия гарантии</li>
                    <li>Ресторан</li>
                    <li>Контакты</li>
                    <li>Поддержка</li>
                    <li>Отследить заказ</li>
                </ul>
                <div className="contact">
                    <div className="contact-item">
                        <img src="" alt="" />
                        <p>+7 (926) 223-10-11</p>
                    </div>
                    <div className="contact-item">
                        <img src="" alt="" />
                        <p>Москва, ул. Юных Ленинцев, д.99</p>
                    </div>
                    <div className="net">
                        <div className="contact-item">
                            <img src="" alt="" />
                            <p>Facebok</p>
                        </div>
                        <div className="contact-item">
                            <img src="" alt="" />
                            <p>Instagram</p>
                        </div>
                    </div>
                    <div className="time">
                        <p>Время работы: с 11:00 до 23:00</p>
                    </div>
                </div>
            </section>}
        </>
    );
}
