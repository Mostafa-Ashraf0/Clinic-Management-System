import style from '../../assets/medicalTest/medicalTestTable.module.css';
import ActionsList from '../ActionsList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEditDataOps } from '../../features/operations/operationsFormSlice';

const OperationsTable = ({data})=>{
    const dispatch = useDispatch();
    const [openRow, setOpenRow] = useState(null);

    const handleActionClick = (rowData)=>{
        console.log(rowData)
        dispatch(setEditDataOps(rowData));
        setOpenRow(openRow === rowData.id ? null : rowData.id);
    };


    return(
        <div className={`${style.table} d-flex flex-column`} style={{width:"80%"}}>
                    <div className={`${style.head}`}>Medical Operations</div>
                    <div className={`${style["t-body"]}`}>
                        <table>
                        <thead>
                            <tr>
                                <th>Operation</th>
                                <th>Category</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map(t=>(
                                <tr key={t.id}>
                                    <td className={style.name}>{t.name}</td>
                                    <td>{t.operations_category?.name}</td>
                                    <td onClick={()=>handleActionClick(t)} style={{cursor:'pointer',position:"relative"}}>
                                        action
                                        <ActionsList actionsList={openRow === t.id} role={"ops"}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
            </table>
            </div>
        </div>
    )
};

export default OperationsTable;