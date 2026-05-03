import { useState, useEffect } from 'react';
import tableStyle from '../assets/table.module.css';
import ActionsList from './ActionsList';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import EditFormView from './EditFormView';
import { setEditData } from '../features/doctors/doctorsSlice';
import { setEditDataRecip } from '../features/receptionist/reciptionistSlice';
import { setEditDataPatient } from '../features/patient/patientSlice';

const Table = ({data,role})=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openRow, setOpenRow] = useState(null);
    const doctorEdit = useSelector((state)=>state.doctor.isEdit);
    const recipEdit = useSelector((state)=>state.recip.isEditRecip);
    const patientEdit = useSelector((state)=>state.patient.isEditPatient);

    const handleDoctorClick = (data)=>{
        setOpenRow(openRow === data.id ? null : data.id);
        dispatch(setEditData(data));
    }

    const handleRecipClick = (data)=>{
        setOpenRow(openRow === data.id ? null : data.id);
        dispatch(setEditDataRecip(data));
    }

    const handlePatientClick = (data)=>{
        setOpenRow(openRow === data.id ? null : data.id);
        dispatch(setEditDataPatient(data));
        console.log(data)
    }

    useEffect(() => {
    console.log("doctorEdit:", doctorEdit);
    }, [doctorEdit]);

    const handleProfileOpen = (id)=>{
        if(role === "patient"){
            navigate(`/patients/${id}/general`)
        }
    }
    return(
        <>
        <div className={`${tableStyle.table}`}>
            <div className={`${tableStyle["t-body"]}`}>
                <table>
                <thead>
                    {role==="doctor" &&(
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Specialization</th>
                            <th>action</th>
                        </tr>
                    )}
                    {role==="receptionist" && (
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>action</th>
                        </tr>
                    )}
                    {role==="patient" && (
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Sessions</th>
                            <th>Email</th>
                            <th>action</th>
                        </tr>
                    )}
                </thead>
                <tbody>
                    {role==="doctor" && data &&(
                        data?.map(d=>(
                            <tr key={d.id}>
                                <td className={tableStyle.name}>
                                    <span onClick={()=>handleProfileOpen(d.id)}>
                                        {d.name}<br/>
                                    </span>
                                </td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td>{d.doctor_extra?.specialization.name}</td>
                                <td className={`${tableStyle["t-dots"]}`} onClick={()=>handleDoctorClick(d)}>
                                    <span>.</span><span>.</span><span>.</span>
                                    <ActionsList actionsList={openRow === d.id} role={role}/>
                                </td>
                            </tr>
                        ))
                    )}
                    {role==="receptionist" && data &&(
                        data?.map(d=>(
                            <tr key={d.id}>
                                <td className={tableStyle.name}>
                                    <span onClick={()=>handleProfileOpen(d.id)}>
                                        {d.name}<br/>
                                    </span>
                                </td>
                                <td>{d.phone}</td>
                                <td>null</td>
                                <td>{d.email}</td>
                                <td className={`${tableStyle["t-dots"]}`} onClick={()=>handleRecipClick(d)}>
                                    <span>.</span><span>.</span><span>.</span>
                                    <ActionsList actionsList={openRow === d.id} role={role}/>
                                    </td>
                            </tr>
                        ))
                    )}
                    {role==="patient" && data &&(
                        data?.map(d=>(
                            <tr key={d.id}>
                                <td>
                                    <span 
                                    onClick={()=>handleProfileOpen(d.id)}
                                    className={tableStyle.name}>
                                        {d.name}<br/>
                                        <span style={{fontSize:"14px",color:"rgba(84, 82, 82, 0.55)"}}>Code: {d.id}</span>
                                    </span>
                                </td>
                                <td>{d.phone}</td>
                                <td>null</td>
                                <td>null</td>
                                <td>{d.email || "null"}</td>
                                <td className={`${tableStyle["t-dots"]}`} onClick={()=>handlePatientClick(d)}>
                                    <span>.</span><span>.</span><span>.</span>
                                    <ActionsList actionsList={openRow === d.id} role={role}/>
                                    </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            </div>
        </div>
        {(doctorEdit || patientEdit || recipEdit) && <EditFormView/>}
        </>
    )
}

export default Table;