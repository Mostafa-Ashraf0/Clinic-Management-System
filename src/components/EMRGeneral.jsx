import style from '../assets/EMR.module.css';
import EmrGeneralInfo from './EmrGeneralInfo';
import LastAppointmentDetails from './LastAppointmentDetails';
import { setIsVisible } from '../features/emr/tagsFormSlice';
import { useDispatch } from 'react-redux';
const EMRGeneral = ()=>{
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(setIsVisible(true));
    }
    return(
        <div className={style.emr}>
            <div className={style.info}>
                <EmrGeneralInfo/>
                <div className={style.tags}>
                    <div className={style.head}>
                        <span className={style.title}>Important Tags</span>
                        <button onClick={handleClick}>open</button>
                    </div>
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