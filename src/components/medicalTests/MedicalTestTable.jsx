import style from '../../assets/medicalTest/medicalTestTable.module.css';
import { getParams } from '../../features/medicalTests/getParams';
import { useState } from 'react';
import ActionsList from '../ActionsList';

const MedicalTestTable = ({data, setTest})=>{
    const [openRow, setOpenRow] = useState(null);
    const handleClick = async(rowData)=>{
        const params = await getParams(rowData.id);
        if(params) setTest(
            {
                test:rowData,
                params: params
            }
        );
    }

    const handleActionsClick = async(rowData)=>{
        setOpenRow(openRow === rowData.id ? null : rowData.id);
        const params = await getParams(rowData.id);
        if(params) setTest(
            {
                test:rowData,
                params: params
            }
        );
    }

    return(
        <div className={`${style.table} d-flex flex-column`}>
                    <div className={`${style.head}`}>Medical Tests</div>
                    <div className={`${style["t-body"]}`}>
                        <table>
                        <thead>
                            <tr>
                                <th>Test</th>
                                <th>Category</th>
                                <th>Parameters</th>
                                <th>Clinic</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map(t=>(
                                <tr key={t.id}>
                                    <td onClick={()=>handleClick(t)} className={style.name}>{t.name}</td>
                                    <td>{t.category?.name}</td>
                                    <td>{t.medical_test_params[0].count}</td>
                                    <td>{t.clinic?.name}</td>
                                    <td onClick={()=>handleActionsClick(t)} style={{cursor:'pointer',position:"relative"}}>
                                        action
                                        <ActionsList actionsList={openRow === t.id} role={"test"}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
            </table>
            </div>
        </div>
    )
};

export default MedicalTestTable