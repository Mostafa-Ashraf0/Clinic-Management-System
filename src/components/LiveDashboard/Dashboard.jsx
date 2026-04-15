import style from '../../assets/liveDashboard/dashboard.module.css';
import { getWorkingTime } from '../../features/liveDashboard/getWorkingTime';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSlots } from '../../features/appointments/appointmentSlice';
import { fetchTodayAppointments } from '../../features/liveDashboard/fetchTodayAppointments';
import { icons } from '../../assets/icons';
import AddAppointmentView from './AddAppointmentView';
import { setLiveFormVisible } from '../../features/liveAppointment/fullViewSlice';
import supabase from '../../utils/supabase';
import TimeSlot from './TimeSlot';


const Dashboard = ()=>{
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const addIcon = icons.live.add;
   
    const timeSlots = useSelector((state)=>state.appointment.timeSlots);
    const liveFormVisible = useSelector((state)=>state.fullView.liveFormVisible);


    const fetchTime = async()=>{
        const data = await getWorkingTime(clinicId);
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
        const channel = supabase
            .channel("appointments-channel")
            .on(
            "postgres_changes",
            {
                event: "*",
                schema: "public",
                table: "appointment",
            },
            (payload) => {
                console.log("Change received!", payload);

                getAppointment();
            }
            )
            .subscribe((status) => {
                console.log("Subscription status:", status);
            });

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);


    useEffect(() => {
        if(!clinicId) return;
        fetchTime();
        getAppointment();
    }, [clinicId]); 


    const handleAddBtn = ()=>{
        dispatch(setLiveFormVisible(true));
    }


    return (
        <div className={style.dashboard}>
        <div className={style.head}>
            <h2 className={style.dashboardTitle}>Today's Appointments</h2>
            <button className={style.addBtn} onClick={handleAddBtn}>
                <img src={addIcon} alt=''/>
                Create
            </button>
        </div>
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
                    <span className={style.action}>Actions</span>
                </div>
            </div>
            {timeSlots.map((time, index) => (
                <TimeSlot key={index} time={time} data={data}/>
            ))}
        </div>
        {liveFormVisible &&  <AddAppointmentView/>}
        </div>
    );
}

export default Dashboard;