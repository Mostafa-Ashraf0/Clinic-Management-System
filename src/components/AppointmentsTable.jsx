import "../assets/appointmentsTable.css";
import { fetchAppointments } from "../features/appointments/fetchAppointments";
import { useEffect, useState } from "react";

const AppointmentsTable = ()=>{
    const [Appoint, setAppoint] = useState([]);

    //fetch appointments
    useEffect(()=>{
        const loadAppointments = async()=>{
            const data = await fetchAppointments();
            setAppoint(data);
        }
        loadAppointments();
    },[])
    return(
        <div className="table d-flex flex-column">
            <div className="head">Appointments schdule</div>
            <div className="t-body">
            <table className='app-t-body'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Clinic</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Appoint.map((A,index)=>(
                        <tr key={A.id}>
                            <td>{index +1}</td>
                            <td>{A.patient.name}</td>
                            <td>{A.profile.name}</td>
                            <td>{A.appointment_date}</td>
                            <td>{A.appointment_time}</td>
                            <td>{A.clinic.name}</td>
                            <td>{A.status.name}</td>
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