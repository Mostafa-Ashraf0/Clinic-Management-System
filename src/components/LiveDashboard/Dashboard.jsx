import style from '../../assets/liveDashboard/dashboard.module.css';
const generateSlot = ()=>{
    const timeSlots = [];
    let start_time = 17 * 60;
    const end_time = 24 * 60;
    const duration = 20;
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
            {timeSlots.map((time, index) => (
            <div key={index} className={style.slot}>
                <span className={style.time}>{time}</span>
                <span className={style.status}>Available</span>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Dashboard;