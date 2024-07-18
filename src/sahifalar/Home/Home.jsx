import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
      setModalOpen(!isModalOpen);
    };
  return (
    <main>

        <section className="hero">
    <div className="container">
    <nav>
        <ul>
            <li>
                <Link to="/aksiya">
                    <img src="https://pizza-site-off.netlify.app/static/media/fire.fda3d59fb4d6c9c3d65af7b9c66345e1.svg" alt="" />
                   <br />
                    <a href="">Акции</a>
                    </Link>
            </li>
            <li>
            <Link to="/pissa">
                <img src="https://pizza-site-off.netlify.app/static/media/pizza.cc3d6db80ef6e967644253b62d242251.svg" alt="" />
                <br />
                <a href="">Пицца</a>
                </Link>
            </li>
            <li>
            <Link to="/sushi">
                <img src="https://pizza-site-off.netlify.app/static/media/sushi.d6cddcaae6149f3968788a3e80ccd7a9.svg" alt="" />
                <br />
                <a href="">Суши</a>
                </Link>
            </li>
            <li>
            <Link to="/napitka">
                <img src="https://pizza-site-off.netlify.app/static/media/drink.2c3a16dce3743953361affea535bfd44.svg" alt="" />
                <br />
                <a href="">Напитки</a>
                </Link>
            </li>
            <li>
            <Link to="/zakuska">
                <img src="https://pizza-site-off.netlify.app/static/media/snacks.7a4d280570195b89479db3293e2289d2.svg" alt="" />
               <br />
                <a href="">Закуски</a>
                </Link>
            </li>
            <li>
            <Link to="/kombo">
                <img src="https://pizza-site-off.netlify.app/static/media/combo.6bc43d6dfe0980e45b62fd36f019ea90.svg" alt="" />
               <br />
                <a href="">Комбо</a>
                </Link>
            </li>
            <li>
            <Link to="/desert">
                <img src="https://pizza-site-off.netlify.app/static/media/dessert.b1ef68351de320c5f1d1d5cd834cc397.svg" alt="" />
               <br />
                <a href="">Десерты</a>
                </Link>
            </li>
            <li>
            <Link to="/souse">
                <img src="https://pizza-site-off.netlify.app/static/media/sauce.26e38b72d2f46fc8390bda20685b80b1.svg" alt="" />
               <br />
                <a href="">Соусы</a>
                </Link>
            </li>
        </ul>
    </nav>
    <div className="box__bloks">
    <img src="https://pizza-site-off.netlify.app/static/media/1.69079d985323bf3414e3.png" alt="" />
        <img src="https://pizza-site-off.netlify.app/static/media/2.60fab0edf8a6ba31b937.png" alt="" />
        <img src="https://pizza-site-off.netlify.app/static/media/1.69079d985323bf3414e3.png" alt="" />
        <img src="https://pizza-site-off.netlify.app/static/media/2.60fab0edf8a6ba31b937.png" alt="" />
    </div>
    </div>
        </section>
        <section>
        <div className="container">

{isModalOpen && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={toggleModal}>&times;</span>
      <div className="modal__box">
        <div className="hed__box2">
          <img
            src="https://pizza-site-off.netlify.app/static/media/location.bcfd89040885d364f942df2c3dda8f15.svg"
            alt=""
          />
          <p>Москва <i className="fa-solid fa-chevron-down"></i></p>
        </div>
        <div className="hed__box1">
          <p>Проверить адрес</p>
        </div>
        <div className="hed__box1">
          <p>Среднее время доставки*:</p>
        </div>
        <div className="hed__box1">
          <p>Время работы: с 11:00 до 23:00</p>
        </div>
        <div className="hed__box2">
          <img
            src="https://pizza-site-off.netlify.app/static/media/user.90c786b08065989b53d029d97c64cd4f.svg"
            alt=""
          />
          <p>Войти в аккаунт</p>
        </div>
      </div>
    </div>
  </div>
)}
  <div className="hed__box3">
      <h3>Проверить адрес доставки</h3>
      <label htmlFor="address">
        <img className="hed__img1" src="https://pizza-site-off.netlify.app/static/media/location.bcfd89040885d364f942df2c3dda8f15.svg" alt="" />
        <input id='address' type="text" placeholder="Адрес" />
      </label>
      <button>Проверить</button>
  </div>
  <br />
  <div className="hed__box4">
      <h1>Доставка пиццы в Москве</h1>
      <p>Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.
<br /><br />
<div className="box4__blok"></div> 
<h4>Как сделать заказ</h4>
Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!</p>
<br />
<h4>
<a className="text2" href="#"> Показать полностью</a>
</h4>
 </div>
 </div>
        </section>
    </main>
  )
}

export default Home