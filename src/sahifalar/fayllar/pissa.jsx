import React,{useState,useEffect} from "react"
import Blox from "../karopkala/blox";
import './menu.css'
 
 export default function Pitsa(){
  // document.querySelector('#btn3').style.

function on(){
  document.querySelector('.menu__box').style.display='flex'
}
function off(){
  document.querySelector('.menu__box').style.display='none'
}
function btn2(){
  document.querySelector('#btn2').style.background='#FF7010'
  document.querySelector('#btn2').style.color='white'
  document.querySelector('#btn3').style.background='white'
  document.querySelector('#btn3').style.color='black'
  document.querySelector('.box2__img3').style.transform='translateX(460px)';
}
function btn3(){
  document.querySelector('#btn3').style.background='#FF7010'
  document.querySelector('#btn3').style.color='white'
  document.querySelector('#btn2').style.background='white'
  document.querySelector('#btn2').style.color='black'
  document.querySelector('.box2__img3').style.transform='translateX(-460px)';

}
function btn4(){
  document.querySelector('#btn4').style.background='#FF7010'
  document.querySelector('#btn4').style.color='white'
  document.querySelector('#btn5').style.background='white'
  document.querySelector('#btn5').style.color='black'
  document.querySelector('#btn6').style.background='white'
  document.querySelector('#btn6').style.color='black'
  document.querySelector('.immg1').style.width='400px'
  document.querySelector('.immg2').style.width='400px'
}
function btn5(){
  document.querySelector('#btn5').style.background='#FF7010'
  document.querySelector('#btn5').style.color='white'
  document.querySelector('#btn4').style.background='white'
  document.querySelector('#btn4').style.color='black'
  document.querySelector('#btn6').style.background='white'
  document.querySelector('#btn6').style.color='black'
  document.querySelector('.immg1').style.width='420px'
  document.querySelector('.immg2').style.width='420px'
}
function btn6(){
  document.querySelector('#btn6').style.background='#FF7010'
  document.querySelector('#btn6').style.color='white'
  document.querySelector('#btn4').style.background='white'
  document.querySelector('#btn4').style.color='black'
  document.querySelector('#btn5').style.background='white'
  document.querySelector('#btn5').style.color='black'
  document.querySelector('.immg1').style.width='450px'
  document.querySelector('.immg2').style.width='450px'
}
const [count,setCount] = useState(379)

let bok=1
let bok2=1
let bok3=1
let bok4=1
function boks1(){
if(bok==1){
  document.querySelector('.boks1').style.borderColor='#FF7010'
  bok++
  setCount(
      count + 59
  );
}else if(bok==2){
  document.querySelector('.boks1').style.borderColor='rgb(234, 234, 234)'
  bok--
  setCount(
    count - 59
);
}
}
function boks2(){
  if(bok2==1){
    document.querySelector('.boks2').style.borderColor='#FF7010'
    bok2++
  }else if(bok2==2){
    document.querySelector('.boks2').style.borderColor='rgb(234, 234, 234)'
    bok2--
  }
  }
  function boks3(){
    if(bok3==1){
      document.querySelector('.boks3').style.borderColor='#FF7010'
      bok3++
    }else if(bok3==2){
      document.querySelector('.boks3').style.borderColor='rgb(234, 234, 234)'
      bok3--
    }
    }
    function boks4(){
      if(bok4==1){
        document.querySelector('.boks4').style.borderColor='#FF7010'
        bok4++
      }else if(bok4==2){
        document.querySelector('.boks4').style.borderColor='rgb(234, 234, 234)'
        bok4--
      }
      }
function qosh(){
  alert("Чикен Сладкий Чили  Qoshildi")
}
    return(
        <>
 <div className="container">
 <div className="menu__box">
          <div className="menu__blox">
          <button onClick={off} className="menu__btn2">X</button>
          <div className="menu__box2 ">
            <div className="box2__img2">
              <img className="immg1" src="https://pizza-site-off.netlify.app/static/media/1.17dcee34ceb3df6bf2dc.png" alt="" />
            </div>
            <div className="box2__img3">
              <img className="immg2" src="https://pizza-site-off.netlify.app/static/media/2.9b45d2c2cd3c765d21af.png" alt="" />
            </div>
          </div>
          <div className="menu__box3 ">
            <h2><img src="https://pizza-site-off.netlify.app/static/media/fire.fda3d59fb4d6c9c3d65af7b9c66345e1.svg" alt="" />Чикен Сладкий Чили</h2>
            <p className="box3__text">Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...</p>
            <div className="box3__btn1">
              <button onClick={btn2} className="btn1" id="btn2">Традиционное</button>
              <button  onClick={btn3} className="btn1" id="btn3">Тонкое</button>
            </div>
            <div className="box3__btn2">
              <button onClick={btn4} className="blox3__btn2" id="btn4">20 SM</button>
              <button onClick={btn5} className="blox3__btn2" id="btn5">28 SM</button>
              <button onClick={btn6} className="blox3__btn2" id="btn6">33 SM</button>
            </div>
            <h3>Добавьте в пиццу</h3>
            <div className="menu__box4">
              <div className="boks">
                <div onClick={boks1} className="boks1">
                  <img src='./images/img1.png' alt="" />
                </div>
                <h4>Моцарелла</h4>
                <h3>59 ₽</h3>
              </div>
              <div className="boks">
                <div onClick={boks2} className="boks2">
                  <img src='./images/img2.png' alt="" />
                </div>
                <h4>Моцарелла</h4>
                <h3>59 ₽</h3>
              </div>
              <div className="boks">
                <div onClick={boks3} className="boks3">
                  <img src='./images/img3.png' alt="" />
                </div>
                <h4>Моцарелла</h4>
                <h3>59 ₽</h3>
              </div>
              <div className="boks">
                <div onClick={boks4} className="boks4">
                  <img src='./images/img4.png' alt="" />
                </div>
                <h4>Моцарелла</h4>
                <h3>59 ₽</h3>
              </div>
            </div>
            <div className="menu__box5">
              <div className="box5__text">
              <h3>Итого:{count} ₽</h3> <p>400 г</p>
              </div>
              <button onClick={qosh} className="box5__btn">Добавить</button>
            </div>
          </div>
          </div>
        </div>

  <br />
      <div className="blox2">
      <h1>
        Пицца
        </h1>
      </div>
        <div className="blox3">
        <div className="blox1">
            <img className='img1' src="https://pizza-site-off.netlify.app/static/media/1.17dcee34ceb3df6bf2dc.png" alt="" />
            <h3>Чикен Сладкий Чили</h3>
            <p>Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...</p>
            <div className="btn2">
                <button onClick={on} className='blox__btn' >Выбрать</button>
                    <h4>от 399 ₽</h4>  
            </div>
        </div>
               <Blox
            src="https://pizza-site-off.netlify.app/static/media/2.9b45d2c2cd3c765d21af.png"
            h3="EASY PEASY огуречный расколбас"
            text="Курица, Лук, Перец Халапеньо..."
            text2="от 399 ₽"
           />
               <Blox
            src="https://pizza-site-off.netlify.app/static/media/3.8737798a1c015acb4b0e.png"
            h3="EASY PEASY чикен а-ля хрен"
            text="Курица, Лук, Соус Карбонара,..."
            text2="от 399 ₽"
           />
               <Blox
            src="https://pizza-site-off.netlify.app/static/media/4.e9bf2083202df985583b.png"
            h3="Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари..."
            text="Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари..."
            text2="от 399 ₽"
           />
        </div>
        <div className="blox3">
        <Blox
            src="https://pizza-site-off.netlify.app/static/media/4.e9bf2083202df985583b.png"
            h3="Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари..."
            text="Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари..."
            text2="от 399 ₽"
           />
            <Blox
            src="https://pizza-site-off.netlify.app/static/media/3.8737798a1c015acb4b0e.png"
            h3="EASY PEASY чикен а-ля хрен"
            text="Курица, Лук, Соус Карбонара,..."
            text2="от 399 ₽"
           />
            <Blox
            src="https://pizza-site-off.netlify.app/static/media/1.17dcee34ceb3df6bf2dc.png"
            h3="Чикен Сладкий Чили"
            text="Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу..."
            text2="от 399 ₽"
           />
             <Blox
            src="https://pizza-site-off.netlify.app/static/media/2.9b45d2c2cd3c765d21af.png"
            h3="EASY PEASY огуречный расколбас"
            text="Курица, Лук, Перец Халапеньо..."
            text2="от 399 ₽"
           />
        </div>
 </div>
        </>
    )
 }