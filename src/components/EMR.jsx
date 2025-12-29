import style from '../assets/EMR.module.css';
import { useEffect, useState } from 'react';
import { getSinglePatient } from '../features/patient/getSinglePatient';
import { useParams } from 'react-router-dom';

const EMR = ()=>{
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
        <div className={style.emr}>
            <div className={style.info}>
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
            <div className={style.medical_info}>
                <span className={style.title}>Medical Information</span>
                <div className={style.info_cards}>
                    <div className={style.info_card}>
                        <span className={style.card_label}>Blood Type</span>
                        <span className={style.card_value}>A+</span>
                    </div>
                    <div className={style.info_card}>
                        <span className={style.card_label}>Weigth</span>
                        <span className={style.card_value}>110 Kg</span>
                    </div>
                    <div className={style.info_card}>
                        <span className={style.card_label}>Heigth</span>
                        <span className={style.card_value}>181 Cm</span>
                    </div>
                </div>
            </div>
            </div>
            <div className={style.complaint_tags}>
                <span className={style.complaint}>Main Complaint</span>
                <div className={style.tags_box}>
                    <span className={style.tag}>Diapetes</span>
                    <span className={style.tag}>high pressure</span>
                    <span className={style.tag}>heart desease</span>
                </div>
            </div>
            <div className={style.last_appointment}>
                <span className={style.appo_title}>Latest Appointment Details</span>
            </div>
        </div>
    )
};

export default EMR;