import { useState } from 'react';
import tableStyle from '../assets/table.module.css';
import ActionsList from './ActionsList';
import { useNavigate } from 'react-router-dom';
const Table = ({title,data,role})=>{
    const navigate = useNavigate();
    const [openRow, setOpenRow] = useState(null);
    const handleClick = (id)=>{
        setOpenRow(openRow === id ? null : id);
    }

    const handleProfileOpen = ()=>{

    }
    return(
        <div className={`${tableStyle.table} d-flex flex-column`}>
            <div className={`${tableStyle.head}`}>{title}</div>
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
                            <th>Email</th>
                            <th>action</th>
                        </tr>
                    )}
                    {role==="patient" && (
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>action</th>
                        </tr>
                    )}
                </thead>
                <tbody>
                    {role==="doctor" &&(
                        data.map(d=>(
                            <tr key={d.id}>
                                <td onClick={()=>handleProfileOpen(d.id)}>{d.name}</td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td>{d.doctor_extra.specialization.name}</td>
                                <td className={`${tableStyle["t-dots"]}`} onClick={()=>handleClick(d.id)}>
                                    <span>.</span><span>.</span><span>.</span>
                                    <ActionsList actionsList={openRow === d.id}/>
                                </td>
                            </tr>
                        ))
                    )}
                    {role==="receptionist" &&(
                        data.map(d=>(
                            <tr key={d.id}>
                                <td onClick={()=>handleProfileOpen(d.id)}>{d.name}</td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td className={`${tableStyle["t-dots"]}`} onClick={()=>handleClick(d.id)}>
                                    <span>.</span><span>.</span><span>.</span>
                                    <ActionsList actionsList={openRow === d.id}/>
                                    </td>
                            </tr>
                        ))
                    )}
                    {role==="patient" &&(
                        data.map(d=>(
                            <tr key={d.id}>
                                <td onClick={()=>handleProfileOpen(d.id)}>{d.name}</td>
                                <td>{d.phone}</td>
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