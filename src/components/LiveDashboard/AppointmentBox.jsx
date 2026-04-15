import style from '../../assets/liveDashboard/dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import { setActionsList } from '../../features/appointments/appointmentSlice';
import { useSelector,useDispatch } from 'react-redux';
import ActionsList from './ActionsList';

const AppointmentBox = ({data})=>{
    const dispatch = useDispatch();
    const ActionsListView = useSelector((state)=>state.appointment.actionsList);
    const statusColor = {
        scheduled: { bg: "#e0e0e0", color: "#333" },
        completed: { bg: "#d4edda", color: "#155724" },
        cancelled: { bg: "#f8d7da", color: "#721c24" } 
    };

    const navigate = useNavigate();
    const handleClick = (data)=>{
        if(data){
            navigate(`/liveDashboard/liveAppointment/${data.id}`);
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

    return(
        <div key={data.id} className={style.appoint}>
            <div className={style.info}>
                <span className={style.patient} onClick={()=>handleClick(data)}>{data.patient_name}</span>
            </div>
            <div className={style.tags}>
                <span className={style.type}>{data.type}</span>
                <span 
                className={style.status} 
                style={{backgroundColor:statusColor[data.status]?.bg, color:statusColor[data.status]?.color}}>
                    {data.status}
                </span>
                <span className={style.action} 
                onClick={() => handleActionsList(data.id)}
                style={{position:"relative"}}>
                    ...
                    <ActionsList 
                    display={ActionsListView.view && ActionsListView.id === data.id} 
                    appointId={data.id}/>
                </span>
            </div>
        </div>
    )
};

export default AppointmentBox;