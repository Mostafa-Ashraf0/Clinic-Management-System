import style from '../assets/emrMedicalInfo.module.css';
import PatientTestCard from './PatientTestCard';
import MedicalTestRecordForm from './medicalTests/MedicalTestRecordForm';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../features/emr/testRecordFormSlice';

const EmrMedicalInfo = ()=>{
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(setIsVisible(true));
    }
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