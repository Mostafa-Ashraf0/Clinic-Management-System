import style from '../../assets/liveDashboard/dashboard.module.css';
import { getWorkingTime } from '../../features/liveDashboard/getWorkingTime';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSlots } from '../../features/appointments/appointmentSlice';
import { fetchTodayAppointments } from '../../features/liveDashboard/fetchTodayAppointments';
import { useNavigate } from 'react-router-dom';
import ActionsList from './actionsList';

const Dashboard = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    //put navigation button to appointment details that navigates to appointment details page with dynamic appointment 
    //onclick on the patient name navigate to the patient EMR page
    const timeSlots = useSelector((state)=>state.appointment.timeSlots);
    const fetchTime = async()=>{
        const data = await getWorkingTime();
        if(data){
            dispatch(setSlots(data));
            console.log(data);
        }
    }

    const getAppointment = async()=>{
        const data = await fetchTodayAppointments();
        if(data){
            setData(data);
            console.log(data);
        }
    }

    useEffect(() => {
        fetchTime();
        getAppointment();
    }, []); 


    const handleClick = (data)=>{
        if(data){
            navigate(`/liveDashboard/liveAppointment/${data.id}`);
        }
    }

    return (
        <div className={style.dashboard}>
        <h2 className={style.dashboardTitle}>Today's Appointments</h2>

        <div className={style.slotsContainer}>
            <div className={style.slotHead}>
                <div className={style.main}>
                    <div className={style.timeContainer}>
                        <span className={style.time}>Time</span>
                    </div>
                    <div className={style.info}>
                        <span className={style.patient}>Patient Name</span>
                    </div>
                </div>
                <div className={style.tags}>
                    <span className={style.type}>Session type</span>
                    <span className={style.status}>Status</span>
                    <span>Actions</span>
                </div>
            </div>
            {timeSlots.map((time, index) => (
            <div key={index} className={style.slot}>
                <div className={style.main}>
                    <div className={style.timeContainer}>
                        <span className={style.time}>{time}</span>
                    </div>
                </div>
                {data?.filter(d=>d.appointment_time.slice(0,5) === time).map(f=>(
                    <div key={f.id}>
                    <div className={style.info}>
                            <span className={style.patient} onClick={()=>handleClick(f)}>{f.patient_name}</span>
                    </div>
                    <div className={style.tags}>
                        <span className={style.type}>{f.type}</span>
                        <span className={style.status}>{f.status}</span>
                        <span className={style.action} style={{position:"relative"}}>...
                            <ActionsList display={false}/>
                        </span>
                    </div>
                    </div>
                ))}
            </div>

            ))}
        </div>
        </div>
    );
}

export default Dashboard;