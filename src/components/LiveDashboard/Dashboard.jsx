import style from '../../assets/liveDashboard/dashboard.module.css';
import { getWorkingTime } from '../../features/liveDashboard/getWorkingTime';
import { useEffect, useState } from 'react';

const Dashboard = ()=>{
    //put navigation button to appointment details that navigates to appointment details page with dynamic appointment id
    //onclick on the patient name navigate to the patient EMR page
    const [timeSlots, setTimeSlots] = useState([]);

    const fetchTime = async()=>{
        const data = await getWorkingTime();
        if(data){
            setTimeSlots(data);
            console.log(data);
        }
    }

    useEffect(() => {
        fetchTime();
    }, []); 

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
                </div>
            </div>
            {timeSlots.map((time, index) => (
            <div key={index} className={style.slot}>
                <div className={style.main}>
                    <div className={style.timeContainer}>
                        <span className={style.time}>{time}</span>
                    </div>
                    <div className={style.info}>
                        <span className={style.patient}>Mostafa Ashraf</span>
                    </div>
                </div>
                <div className={style.tags}>
                    <span className={style.type}>Checkup</span>
                    <span className={style.status}>Available</span>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Dashboard;