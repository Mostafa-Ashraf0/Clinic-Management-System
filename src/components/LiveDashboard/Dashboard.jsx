import style from '../../assets/liveDashboard/dashboard.module.css';
import { getWorkingTime } from '../../features/liveDashboard/getWorkingTime';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSlots, setActionsList } from '../../features/appointments/appointmentSlice';
import { fetchTodayAppointments } from '../../features/liveDashboard/fetchTodayAppointments';
import { useNavigate } from 'react-router-dom';
import ActionsList from './ActionsList';
import { icons } from '../../assets/icons';
import AddAppointmentView from './AddAppointmentView';
import { setLiveFormVisible } from '../../features/liveAppointment/fullViewSlice';
import supabase from '../../utils/supabase';

const Dashboard = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const addIcon = icons.live.add;
   
    const timeSlots = useSelector((state)=>state.appointment.timeSlots);
    //visiability
    const ActionsListView = useSelector((state)=>state.appointment.actionsList);
    const liveFormVisible = useSelector((state)=>state.fullView.liveFormVisible);

    const fetchTime = async()=>{
        const data = await getWorkingTime();
        if(data){
            dispatch(setSlots(data));
            console.log(data);
        }
    }

    const handleActionsList = (appointId)=>{
        if (ActionsListView.id === appointId) {
            dispatch(setActionsList({
                view: !ActionsListView.view,
                id: appointId
            }));
        } else {
            dispatch(setActionsList({
                view: true,
                id: appointId
            }));
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
        fetchTime();
        getAppointment();
    }, []); 


    const handleAddBtn = ()=>{
        dispatch(setLiveFormVisible(true));
    }


    const handleClick = (data)=>{
        if(data){
            navigate(`/liveDashboard/liveAppointment/${data.id}`);
        }
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
                        <span className={style.action} 
                        onClick={() => handleActionsList(f.id)}
                        style={{position:"relative"}}>
                            ...
                            <ActionsList 
                            display={ActionsListView.view && ActionsListView.id === f.id} 
                            appointId={f.id}/>
                        </span>
                    </div>
                    </div>
                ))}
            </div>

            ))}
        </div>
        {liveFormVisible &&  <AddAppointmentView/>}
        </div>
    );
}

export default Dashboard;