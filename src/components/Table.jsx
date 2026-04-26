import { useState } from 'react';
import tableStyle from '../assets/table.module.css';
import ActionsList from './ActionsList';
import { useNavigate } from 'react-router-dom';
const Table = ({data,role})=>{
    const navigate = useNavigate();
    const [openRow, setOpenRow] = useState(null);
    const handleClick = (id)=>{
        setOpenRow(openRow === id ? null : id);
    }

    const handleProfileOpen = (id)=>{
        if(role === "patient"){
            navigate(`/patients/${id}/general`)
        }
    }
    return(
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
                        data.map(d=>(
                            <tr key={d.id}>
                                <td className={tableStyle.name}>
                                    <span onClick={()=>handleProfileOpen(d.id)}>
                                        {d.name}<br/>
                                        code
                                    </span>
                                </td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td>{d.doctor_extra?.specialization.name}</td>
                                <td className={`${tableStyle["t-dots"]}`} onClick={()=>handleClick(d.id)}>
                                    <span>.</span><span>.</span><span>.</span>
                                    <ActionsList actionsList={openRow === d.id}/>
                                </td>
                            </tr>
                        ))
                    )}
                    {role==="receptionist" && data &&(
                        data.map(d=>(
                            <tr key={d.id}>
                                <td className={tableStyle.name}>
                                    <span onClick={()=>handleProfileOpen(d.id)}>
                                        {d.name}<br/>
                                        code
                                    </span>
                                </td>
                                <td>null</td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td className={`${tableStyle["t-dots"]}`} onClick={()=>handleClick(d.id)}>
                                    <span>.</span><span>.</span><span>.</span>
                                    <ActionsList actionsList={openRow === d.id}/>
                                    </td>
                            </tr>
                        ))
                    )}
                    {role==="patient" && data &&(
                        data.map(d=>(
                            <tr key={d.id}>
                                <td>
                                    <span 
                                    onClick={()=>handleProfileOpen(d.id)}
                                    className={tableStyle.name}>
                                        {d.name}<br/>
                                        code
                                    </span>
                                </td>
                                <td>{d.phone}</td>
                                <td>null</td>
                                <td>null</td>
                                <td>{d.email || "null"}</td>
                                <td className={`${tableStyle["t-dots"]}`} onClick={()=>handleClick(d.id)}>
                                    <span>.</span><span>.</span><span>.</span>
                                    <ActionsList actionsList={openRow === d.id}/>
                                    </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Table;