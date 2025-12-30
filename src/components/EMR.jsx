import style from '../assets/EMR.module.css';
import EmrGeneralInfo from './EmrGeneralInfo';
import EmrMedicalInfo from './EmrMedicalInfo';
const EMR = ()=>{
    return(
        <div className={style.emr}>
            <div className={style.info}>
            <EmrGeneralInfo/>
            <EmrMedicalInfo/>
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