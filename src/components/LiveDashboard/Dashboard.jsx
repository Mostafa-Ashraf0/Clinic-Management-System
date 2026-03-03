import style from '../../assets/liveDashboard/dashboard.module.css';
const generateSlot = ()=>{
    const timeSlots = [];
    let start_time = 17 * 60;
    const end_time = 24 * 60;
    const duration = 15;
    while(start_time<end_time){
        const hours = Math.floor(start_time/60);
        const minutes = start_time % 60;

        const formattedHours = hours > 12? hours-12 : hours;
        const formattedMinutes = minutes === 0? "00" : minutes;
        const period = hours >= 12? "PM" : "AM";
        timeSlots.push(`${formattedHours}: ${formattedMinutes} ${period}`);
        start_time += duration;
    }
    return timeSlots;
}

const Dashboard = ()=>{
    const timeSlots = generateSlot();
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