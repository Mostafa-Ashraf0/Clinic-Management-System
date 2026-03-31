import style from '../../assets/liveAppointment/allTestView.module.css'
import { useDispatch } from 'react-redux';
import { setTestVisible } from '../../features/liveAppointment/fullViewSlice';
import EmrMedicalInfo from '../EmrMedicalInfo';
import { icons } from '../../assets/icons';

const AllTestsView = ()=>{
    const dispatch = useDispatch();
    const closeIcon = icons.public.close;

    const handleClick = ()=>{
        dispatch(setTestVisible(false))
    }
    return(
        <div className={style.main}>
            <div className={style.container}>
                    <span onClick={handleClick} className={style.close}>
                        <img src={closeIcon} alt='close'/>
                    </span>
                <EmrMedicalInfo/>
            </div>
        </div>
    )
};

export default AllTestsView;