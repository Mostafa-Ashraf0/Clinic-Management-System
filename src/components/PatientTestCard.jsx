import style from '../assets/medicalInfoCards.module.css';
import { icons } from '../assets/icons';
import { useState, useEffect } from 'react';
import PatientTestHistory from './PatientTestHistory';
import { getTestByPatientId } from '../features/emr/getTestByPatientId';
import { useParams } from 'react-router-dom';

const PatientTestCard = ({data})=>{
    const [testHistory, setTestHistory] = useState([]);
    const {patientId} = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = ()=>{
        setIsOpen(!isOpen);
        setTestHistory([])
    }
    const getTestHistory = async()=>{
        const tests = await getTestByPatientId(patientId, data.test_id);
        if(tests) setTestHistory(tests);
    }
    const handleClick = ()=>{
        getTestHistory();
    }

    useEffect(()=>{
        console.log(testHistory);
    },[testHistory])
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
                <button onClick={handleClick}>View History</button>
                <PatientTestHistory
                    data = {testHistory}
                />
            </div>
        </div>
    )
};

export default PatientTestCard;