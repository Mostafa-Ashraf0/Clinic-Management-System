import { useParams } from 'react-router-dom';
import style from '../assets/lastAppointmentDetails.module.css'
import { fetchLastAppointment } from '../features/appointments/fetchLastAppointment';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const LastAppointmentDetails = ()=>{
    const globalPatientId = useSelector((state) => state.appointment.patientId);
    const {patientId} = useParams();
    const {appointmentId} = useParams();
    const [appData, setAppData] = useState(null);
    const fetchData = async()=>{
        const data = await fetchLastAppointment(patientId || globalPatientId, appointmentId);
        if(data){
            setAppData(data);
        }
    }

    useEffect(()=>{
        console.log("fetched");
    },[appData])

    useEffect(()=>{
        if(!(patientId || globalPatientId)) return;
        fetchData();
    },[patientId , globalPatientId , appointmentId])
    return(
        <div className={style.last_appointment}>
            <span className={style.appo_title}>Latest Appointment Details</span>
            <div className={style.info}>
                <span className={style.value}>
                    <span className={style.label}>Visit Date:</span>
                    <span className={style.date}>1/3/2025</span>
                </span>
                <span className={style.value}>
                    <span className={style.label}>Vist Type:</span>
                    <span className={style.type}>Follow Up</span>
                </span>
                <span className={style.value}>
                    <span className={style.label}>Visit Status:</span>
                    <span className={style.status}>Completed</span>
                </span>
            </div>
            <div className={style.complaint}>
                    <span className={style.title}>Chief Complaint</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus culpa nobis eveniet, facere sunt neque alias nesciunt, illum assumenda earum excepturi ex provident dolorem corrupti laudantium placeat. Optio, similique delectus.</p>
            </div>
        </div>
    )
}

export default LastAppointmentDetails;