import style from '../assets/medicalInfoCards.module.css';
import { icons } from '../assets/icons';
import { useState } from 'react';

const PatientTestCard = ({data})=>{
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = ()=>{
        setIsOpen(!isOpen);
    }
    return(
        <div className={style.info_card}>
            <div className={style.header} style={isOpen?{marginBottom:"20px"}:{marginBottom:"0"}}>
                <span className={style.card_title}>{data.test_name}</span>
                <span>{data.category_name}</span>
                <img onClick={handleToggle} src={icons.header.dropdown} alt="dorpdown" className={style.icon}/>
            </div>
            <div className={style.card_list} style={isOpen?{display:"flex"}:{display:"none"}}>
                {data.result_values.map(r=>(
                    <div className={style.card_listItem} key={r.param_id}>
                        <span className={style.card_label}>{r.param_name}:</span>
                        <span className={style.card_value}>{r.value_numeric}  {r.unit}</span>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default PatientTestCard;