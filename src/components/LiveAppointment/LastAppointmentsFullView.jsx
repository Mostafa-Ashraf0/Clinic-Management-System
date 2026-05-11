import style from '../../assets/liveAppointment/lastAppointmentsFullView.module.css';
import AppointmentDetailsBox from '../AppointmentDetailsBox';
import { icons } from '../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setLatestAppointFullView } from '../../features/liveAppointment/fullViewSlice';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllPastAppointments } from '../../features/appointments/fetchAllPastAppointments';

const LastAppointmentsFullView = ()=>{
    const [appodata, setAppoData] = useState(null);
    const {appointmentId} = useParams();
    const globalPatientId = useSelector((state) => state.appointment.patientId);
    const {patientId} = useParams();
    const dispatch = useDispatch();
    const closeIcon = icons.public.close;
    const handleClick = ()=>{
            dispatch(setLatestAppointFullView(false));
    }

    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetchAllPastAppointments(patientId || globalPatientId, appointmentId);
            if(data){
                setAppoData(data);
            }
        }
        fetchData()
    },[appointmentId, globalPatientId, patientId])
    return(
        <div className={style.main}>
            <div className={style.container}>
                <span onClick={handleClick} className={style.close}>
                    <img src={closeIcon} alt='close'/>
                </span>
                {appodata?.map(d=>(
                    <AppointmentDetailsBox data={d} key={d.id}/>
                ))}
            </div>
        </div>
    )
};

export default LastAppointmentsFullView;