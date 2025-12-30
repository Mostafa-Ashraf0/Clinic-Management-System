import style from '../assets/medicalInfoCards.module.css';
import { icons } from '../assets/icons';
import { useState } from 'react';
const TSScoreCard = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = ()=>{
        setIsOpen(!isOpen);
    }
    return(
        <div className={style.info_card}>
            <div className={style.header} style={isOpen?{marginBottom:"20px"}:{marginBottom:"0"}}>
                <span className={style.card_title}>T-Score/Z-Score/Diagnosis</span>
                <img onClick={handleToggle} src={icons.header.dropdown} alt="dorpdown" className={style.icon}/>
            </div>
            <div className={style.card_items} style={isOpen?{display:"flex"}:{display:"none"}}>
                <div className={style.card_item}>
                    <span className={style.card_label}>T-Score</span>
                    <span className={style.card_value}>A+</span>
                </div>
                <div className={style.card_item}>
                    <span className={style.card_label}>Z-Score</span>
                    <span className={style.card_value}>A+</span>
                </div>
                <div className={style.card_item}>
                    <span className={style.card_label}>Diagnosis</span>
                    <span className={style.card_value}>A+</span>
                </div>
            </div>
        </div>
    )
}


export default TSScoreCard;