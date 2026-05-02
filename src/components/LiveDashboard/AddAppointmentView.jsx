import style from '../../assets/liveDashboard/addAppointmentView.module.css';
import AppointmentForm from '../AppointmentForm';
import { useDispatch } from 'react-redux';
import { setLiveFormVisible } from '../../features/liveAppointment/fullViewSlice';
import { icons } from '../../assets/icons';
import { useEffect } from 'react';
import { setIsEdit } from '../../features/appointments/appointmentSlice';
import { setPhone, setFinalPatient } from '../../features/appointments/patientSearchSlice';
import { setLiveAppoSlot } from '../../features/appointments/appointmentSlice';

const AddAppointmentView = ()=>{
    const today = new Date().toISOString().split("T")[0];
    const dispatch = useDispatch();
    const closeIcon = icons.public.close;

    const handleClose = ()=>{
        dispatch(setLiveAppoSlot(null));
        dispatch(setLiveFormVisible(false));
        dispatch(setIsEdit(false));
        dispatch(setPhone(''));
        dispatch(setFinalPatient({
            name:'',
            age:'',
            email:''
        }))
    }


    useEffect(()=>{
        console.log(today);
    },[])


    return(
        <div className={style.main}>
            
            <div className={style.container}>
                <span onClick={handleClose} className={style.close}>
                <img src={closeIcon} alt='close'/>
                </span>
                <AppointmentForm date={today}/>
            </div>
        </div>
    )
};


export default AddAppointmentView;