import './box.css'

export default function Blox(props){
    return(
        <div className="blox1">
            <img className='img1' src={props.src} alt="" />
            <h3>{props.h3}</h3>
            <p>{props.text}</p>
            <div className="btn2">
                <button className='blox__btn' >Выбрать</button>
                    <h4>{props.text2}</h4>  
            </div>
        </div>
    )
}