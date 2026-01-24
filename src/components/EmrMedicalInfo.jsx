import style from '../assets/emrMedicalInfo.module.css';
import CalPhoCard from './CalPhoCard';
const EmrMedicalInfo = ()=>{
    return(
        <div className={style.medical_info}>
            <div className={style.head}>
                <span className={style.title}>Medical Tests</span>
                <button>Add New Test</button>
            </div>
            <div className={style.info_cards}>
                <CalPhoCard/>
            </div>
        </div>
    )
};

export default EmrMedicalInfo;