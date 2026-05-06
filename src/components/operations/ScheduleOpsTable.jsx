import style from '../../assets/medicalTest/medicalTestTable.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setEditDataSchedule } from '../../features/operations/operationsFormSlice';
import ActionsList from '../ActionsList';

const ScheduleOpsTable = ({data})=>{
    const dispatch = useDispatch();
    const [openRow, setOpenRow] = useState(null);

    const handleActionClick = (rowData)=>{
        console.log(rowData);
        dispatch(setEditDataSchedule(rowData));
        setOpenRow(openRow === rowData.id ? null : rowData.id);
    };
    return(
        <div className={`${style.table} d-flex flex-column`}>
                    <div className={`${style.head}`}>Medical Operations</div>
                    <div className={`${style["t-body"]}`}>
                        <table>
                        <thead>
                            <tr>
                                <th>Operation</th>
                                <th>Doctor</th>
                                <th>Patient</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map(t=>(
                                <tr key={t.id}>
                                    <td className={style.name}>{t.medical_operations.name}</td>
                                    <td>{t.doctor_extra?.profile?.name}</td>
                                    <td>{t.patient.name}</td>
                                    <td>{t.date}</td>
                                    <td onClick={()=>handleActionClick(t)} style={{cursor:"pointer", position:"relative"}}>
                                        action
                                        <ActionsList actionsList={openRow === t.id} role={"opsSchedule"}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
            </table>
            </div>
        </div>
    )
};

export default ScheduleOpsTable;