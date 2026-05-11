import { useParams } from 'react-router-dom';
import { fetchLastAppointment } from '../../features/appointments/fetchLastAppointment';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppointmentDetailsBox from '../AppointmentDetailsBox';
import { icons } from '../../assets/icons';
import { setLatestAppointFullView } from '../../features/liveAppointment/fullViewSlice';

const LastAppointmentDetails = ()=>{
    const dispatch = useDispatch();
    const globalPatientId = useSelector((state) => state.appointment.patientId);
    const {patientId} = useParams();
    const {appointmentId} = useParams();
    const [appData, setAppData] = useState([]);
    const fetchData = async()=>{
        const data = await fetchLastAppointment(patientId || globalPatientId, appointmentId);
        if(data){
            console.log("wanted data:", data)
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


    const handleFullView = ()=>{
        dispatch(setLatestAppointFullView(true));
    }
    return(
        <>
            <div style={{display:'flex',gap:'10px'}}>
                <h3 style={{alignSelf:'self-start', margin:'0', fontSize:'18px', color:'rgb(102, 116, 140)'}}>Latest Appointment</h3>
                <img 
                src={icons.live.view} 
                alt='view all' 
                style={{width:'25px', height:'25px', cursor:'pointer'}}
                onClick={handleFullView}
                />
            </div>
            {appData?.length > 0
            ? appData.map(d => (
                <AppointmentDetailsBox data={d} key={d.id} />
                ))
            : "No data found"}
        </>
    )
}

export default LastAppointmentDetails;