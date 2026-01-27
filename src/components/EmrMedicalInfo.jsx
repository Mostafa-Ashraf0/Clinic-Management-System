import style from '../assets/emrMedicalInfo.module.css';
import PatientTestCard from './PatientTestCard';
import MedicalTestRecordForm from './medicalTests/MedicalTestRecordForm';
const EmrMedicalInfo = ()=>{
    return(
        <div className={style.medical_info}>
            <div className={style.head}>
                <span className={style.title}>Medical Tests</span>
                <button>Add New Test</button>
            </div>
            <div className={style.info_cards}>
                <PatientTestCard/>
                <MedicalTestRecordForm/>
            </div>
        </div>
    )
};

export default EmrMedicalInfo;