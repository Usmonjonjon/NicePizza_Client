import { Link } from "react-router-dom"
import "./Footer.css"
 export default function Footer(){

    return(
        <>
        <div className="fot__box">
            <div className="fot__box2">
                <div className="fot__blox1 fot__blox">
                <div className="hed__box2">
                    <img src="https://pizza-site-off.netlify.app/static/media/logos.cb06518345f8aac5b966c310bfa2884d.svg" alt="" />
                    <Link to='/aksiya'> <p>Куда пицца</p></Link>
                </div>
                <h5 className="text3">© Copyright 2021 — Куда Пицца</h5>
                </div>
                <div className="fot__blox2 fot__blox">
                <h4> Куда пицца</h4>
                <p>О компании</p>
                <p>Пользовательское соглашение</p>      
                <p>Условия гарантии</p>
                </div>
                <div className="fot__blox3 fot__blox"> <br />
                <h4>Помощь</h4>
                <p>Ресторан</p>
                <p>Контакты</p>
                <p>Поддержка</p>
                <p>Отследить заказ</p>
                </div>
                <div className="fot__blox4 fot__blox">
                    <h4>Контакты</h4>
                    <p><i class="fa-solid fa-phone"></i> +7 (926) 223-10-11</p>
                    <p><i class="fa-solid fa-location-dot"></i> Москва, ул. Юных Ленинцев, д.99</p>
                    <p><i class="fa-brands fa-facebook"></i> Facebok , <i class="fa-brands fa-instagram"></i> Instagram   </p>
                </div>
            </div>
        </div>
        </>
    )
 }