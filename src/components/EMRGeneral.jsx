import style from '../assets/EMR.module.css';
import EmrGeneralInfo from './EmrGeneralInfo';
import LastAppointmentDetails from './LastAppointmentDetails';

const EMRGeneral = ()=>{
    return(
        <div className={style.emr}>
            <div className={style.info}>
                <EmrGeneralInfo/>
                <div className={style.tags}>
                    <span className={style.title}>Important Tags</span>
                    <div className={style.tags_box}>
                        <span className={style.tag}>high pressure</span>
                        <span className={style.tag}>heart desease</span>
                        <span className={style.tag}>Diapetes</span>
                        <span className={style.tag}>high pressure</span>
                        <span className={style.tag}>heart desease</span>
                        <span className={style.tag}>Diapetes</span>
                        <span className={style.tag}>high pressure</span>
                    </div>
                </div>
            </div>
            <LastAppointmentDetails/>
        </div>
    )
};

export default EMRGeneral;