import style from '../assets/table.module.css';
import { useEffect} from "react";
import { fetchAppointments } from "../features/appointments/fetchAppointments";
import { useSelector } from 'react-redux';import { useDispatch } from 'react-redux';
import { setLiveFormVisible } from '../features/liveAppointment/fullViewSlice';
import { getDataToEdit } from '../features/appointments/getDataToEdit';
import { setEditAppointData, setIsEdit } from '../features/appointments/appointmentSlice';
import { setPaginatedData } from '../features/appointments/appointmentSlice';
const AppointmentsTable = ()=>{
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const dispatch = useDispatch();
    

    const statusColor = {
        scheduled: { bg: "#e0e0e0", color: "#333" },
        completed: { bg: "#d4edda", color: "#155724" },
        cancelled: { bg: "#f8d7da", color: "#721c24" } 
    };
    //fetch appointments
    const limit = useSelector((state)=>state.appointment.paginatedLimit);
    const currentPage = useSelector((state)=>state.appointment.currentTablePage);
    const AppointmentData = useSelector((state)=>state.appointment.paginatedData);

    useEffect(()=>{
        if(!currentPage && limit) return;
        const loadAppointments = async()=>{
            if(!clinicId) return;
            const data = await fetchAppointments(clinicId, limit, currentPage);
            dispatch(setPaginatedData(data));
        }
        loadAppointments();
    },[clinicId, currentPage, limit, dispatch])

    useEffect(()=>{
        if(AppointmentData) console.log(AppointmentData);
    },[AppointmentData])

    //handle edit click
    const handleEdit = async(id)=>{
        dispatch(setLiveFormVisible(true));
        const data = await getDataToEdit(id);
        if(data){
            dispatch(setEditAppointData(data));
            dispatch(setIsEdit(true));
            console.log("look data", data)
        }
    }



    return(
        <div className={style.table}>
            <div className={`${style["t-body"]}`}>
            <table className='app-t-body'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Patient name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {AppointmentData?.map((A,index)=>(
                        <tr key={A.id}>
                            <td>{index +1}</td>
                            <td>{A.patient?.name} <br/>
                                <span style={{fontSize:"14px",color:"rgba(84, 82, 82, 0.55)"}}>Code: {A.patient?.id}</span>
                            </td>
                            <td>{A.appointment_date}</td>
                            <td>{A.appointment_time}</td>                            
                            <td>
                                <span
                                style={{backgroundColor:statusColor[A.status]?.bg, color:statusColor[A.status]?.color,
                                    display:'inline-block',
                                    width:'100px',
                                    textAlign:'center',
                                    borderRadius:'5px',
                                    padding:"2px"}}
                                >
                                    {A.status}
                                </span>
                            </td>
                            <td>{A.type}</td>
                            <td 
                                className="dots" 
                                style={{cursor:"pointer"}}
                                onClick={()=>handleEdit(A.id)}
                            >
                                <span>.</span><span>.</span><span>.</span>
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default AppointmentsTable;