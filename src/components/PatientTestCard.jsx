import style from '../assets/medicalInfoCards.module.css';
import { icons } from '../assets/icons';
import { useState } from 'react';

const PatientTestCard = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = ()=>{
        setIsOpen(!isOpen);
    }
    return(
        <div className={style.info_card}>
            <div className={style.header} style={isOpen?{marginBottom:"20px"}:{marginBottom:"0"}}>
                <span className={style.card_title}>Calcium and Phosphorus</span>
                <img onClick={handleToggle} src={icons.header.dropdown} alt="dorpdown" className={style.icon}/>
            </div>
            <div className={style.card_list} style={isOpen?{display:"flex"}:{display:"none"}}>
                <div className={style.card_listItem}>
                    <span className={style.card_label}>Calcium:</span>
                    <span className={style.card_value}>25 ng/ml</span>
                </div>
                <div className={style.card_listItem}>
                    <span className={style.card_label}>Phosphorus:</span>
                    <span className={style.card_value}>Normal</span>
                </div>
            </div>
        </div>
    )
};

export default PatientTestCard;