import style from '../../assets/liveDashboard/dashboard.module.css';
import AppointmentBox from './AppointmentBox';
import SlotAddBox from './SlotAddBox';

const TimeSlot = ({time, data})=>{
    const filtered = data?.filter(
        d => d.appointment_time.slice(0,5) === time
    );
    return (
        <div className={style.slot} style={filtered?.length === 0 ? { border: 'none' } : undefined}>
            <div className={style.main}>
            <div className={style.timeContainer}>
                <span className={style.time}>{time}</span>
            </div>
            </div>

            {filtered?.length > 0 ? (
            filtered.map(f => (
                <AppointmentBox key={f.id} data={f} />
            ))
            ) : (
            <SlotAddBox />
            )}
        </div>
    );
};

export default TimeSlot;