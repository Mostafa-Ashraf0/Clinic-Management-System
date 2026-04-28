import style from '../../assets/liveDashboard/dashboard.module.css';
import { setLiveFormVisible } from '../../features/liveAppointment/fullViewSlice';
import { setLiveAppoSlot } from '../../features/appointments/appointmentSlice';
import { useDispatch } from 'react-redux';

const SlotAddBox = ({currentSlot})=>{

    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(setLiveFormVisible(true));
        dispatch(setLiveAppoSlot(currentSlot));
        //console.log('currslot', currentSlot)
    }

    return(
        <div className={style.slotAddBox} onClick={handleClick}>
            <span>Add+</span>
        </div>
    )
};


export default SlotAddBox;