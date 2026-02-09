import style from '../assets/emrMedicalInfo.module.css';
import PatientTestCard from './PatientTestCard';
import MedicalTestRecordForm from './medicalTests/MedicalTestRecordForm';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../features/emr/testRecordFormSlice';
import { getLastTestsByPatientId } from '../features/emr/getLastTestsByPatientId';
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
        const tests = await getLastTestsByPatientId(patientId);
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
                <button onClick={handleClick} className={style.addBtn}>Add New Record</button>
            </div>
            <div className={style.info_cards}>
                {tests.length>0 && tests.map(t=>(
                    <PatientTestCard 
                    key={t.test_id}
                    data={t}
                    />
                ))}
                <MedicalTestRecordForm
                onRecordAdd={()=>getTestData()}
                />
            </div>
        </div>
    )
};

export default EmrMedicalInfo;