import { useEffect } from 'react';
import style from '../../assets/medicalTest/medicalTestTable.module.css';
const MedicalTestTable = ({data, getTests})=>{

    useEffect(()=>{
        getTests();
    },[])

    useEffect(()=>{
        console.log(data);
    },[data])
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
                                    <td>{t.name}</td>
                                    <td>{t.category?.name}</td>
                                    <td>{t.medical_test_params[0].count}</td>
                                    <td>{t.clinic?.name}</td>
                                    <td>action</td>
                                </tr>
                            ))}
                        </tbody>
            </table>
            </div>
        </div>
    )
};

export default MedicalTestTable