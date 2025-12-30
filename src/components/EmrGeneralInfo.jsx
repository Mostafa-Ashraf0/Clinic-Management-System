import style from '../assets/emrGeneralInfo.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePatient } from '../features/patient/getSinglePatient';
const EmrGeneralInfo = ()=>{
    const {patientId} = useParams();
    const [patientData, setPatientData] = useState({
        name:'-',
        phone:'-',
        phone_2:'-',
        email:'-',
        gender:'-',
        age:'-',
        session:'-'
    });
    useEffect(()=>{
        const getPData = async()=>{
            const PData = await getSinglePatient(Number(patientId));
            setPatientData((prev)=>({...prev,...PData}));
            console.log(PData)
        };
        getPData();
    },[patientId])
    return(
        <div className={style.general_info}>
                        <span className={style.title}>General Information</span>
                        <span className={style.name}>{patientData.name}</span>
                        <div className={style.meta_data}>
                            <div className={style.sex_age}>
                                <span className={style.value}>
                                    <span className={style.label}>Sex:</span>
                                    {patientData.gender}
                                </span>
                                <span className={style.value}>
                                    <span className={style.label}>Age:</span>
                                    {patientData.age}
                                </span>
                                <span className={style.value}>
                                    <span className={style.label}>Sessions:</span>
                                    {patientData.session}
                                </span>
                                
                            </div>
                            <div className={style.contact}>
                                <span className={style.value}>
                                    <span className={style.label}>Email:</span> 
                                    {patientData.email}
                                </span>
                                <span className={style.value}>
                                    <span className={style.label}>Phone</span>
                                    : {patientData.phone}
                                </span>
                                <span className={style.value}>
                                    <span className={style.label}>Phone_2</span>
                                    : {patientData.phone_2}
                                </span>
                            </div>
                        </div>
                    </div>
    )
};

export default EmrGeneralInfo;