import style from '../../assets/liveDashboard/dashboard.module.css';
import AppointmentBox from './AppointmentBox';

const TimeSlot = ({time, data})=>{
    

    return(
        <div className={style.slot}>
                <div className={style.main}>
                    <div className={style.timeContainer}>
                        <span className={style.time}>{time}</span>
                    </div>
                </div>
                {data?.filter(d=>d.appointment_time.slice(0,5) === time).map(f=>(
                    <AppointmentBox data={f}/>
                ))}
            </div>
    )
};

export default TimeSlot;