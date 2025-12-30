import style from '../assets/emrMedicalInfo.module.css';
import VitaminDCard from './VitaminDCard';
import TSScoreCard from './TSScoreCard';
const EmrMedicalInfo = ()=>{
    return(
        <div className={style.medical_info}>
            <span className={style.title}>Medical Information</span>
            <div className={style.info_cards}>
                <TSScoreCard/>
                <VitaminDCard/>
            </div>
        </div>
    )
};

export default EmrMedicalInfo;