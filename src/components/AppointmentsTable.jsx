import style from '../assets/table.module.css';
import { useEffect, useState } from "react";
import { fetchAppointments } from "../features/appointments/fetchAppointments";
import { useSelector } from 'react-redux';
const AppointmentsTable = ()=>{
    const [Appoint, setAppoint] = useState([]);
    const clinicId = useSelector((state) => state.auth.clinic_id);

    const statusColor = {
        scheduled: { bg: "#e0e0e0", color: "#333" },
        completed: { bg: "#d4edda", color: "#155724" },
        cancelled: { bg: "#f8d7da", color: "#721c24" } 
    };
    //fetch appointments
    useEffect(()=>{
        const loadAppointments = async()=>{
            const data = await fetchAppointments(clinicId);
            setAppoint(data);
        }
        loadAppointments();
    },[clinicId])

    useEffect(()=>{
        if(Appoint) console.log(Appoint);
    },[Appoint])
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
                        <th>Clinic</th>
                        <th>Status</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {Appoint?.map((A,index)=>(
                        <tr key={A.id}>
                            <td>{index +1}</td>
                            <td>{A.patient?.name} <br/> code</td>
                            <td>{A.appointment_date}</td>
                            <td>{A.appointment_time}</td>
                            <td>{A.clinic?.name}</td>
                            
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
                            <td className="dots"><span>.</span><span>.</span><span>.</span></td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default AppointmentsTable;