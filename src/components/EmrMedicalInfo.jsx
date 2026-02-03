import style from '../assets/emrMedicalInfo.module.css';
import PatientTestCard from './PatientTestCard';
import MedicalTestRecordForm from './medicalTests/MedicalTestRecordForm';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../features/emr/testRecordFormSlice';
import { getTestsByPatientId } from '../features/emr/getTestsByPatientId';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EmrMedicalInfo = ()=>{
    const [tests, setTests] = useState([]);
    const {patientId} = useParams();
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(setIsVisible(true));
    }
    const getTestData = async()=>{
        const tests = await getTestsByPatientId(patientId);
        if(tests) setTests(tests);
    }
    useEffect(()=>{
        getTestData();
    },[]);
    useEffect(()=>{
        console.log(tests);
    },[tests])
    return(
        <div className={style.medical_info}>
            <div className={style.head}>
                <span className={style.title}>Medical Tests</span>
                <button onClick={handleClick}>Add New Record</button>
            </div>
            <div className={style.info_cards}>
                <PatientTestCard/>
                <MedicalTestRecordForm/>
            </div>
        </div>
    )
};

export default EmrMedicalInfo;