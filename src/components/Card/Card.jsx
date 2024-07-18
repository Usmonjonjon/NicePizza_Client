import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <>
    <div className="card">
        <img className='card-img' src={props.src} alt="" />
        <h3>{props.h3}</h3>
        <p>{props.text}</p>
        <div className="card-btn">
            <button className='blox__btn' >Выбрать</button>
            <h4>{props.text2}</h4>  
        </div>
    </div>
    </>
  )
}

export default Card