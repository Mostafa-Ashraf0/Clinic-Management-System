import style from '../assets/medicalTest/medicalTestTable.module.css';


const PatientTestHistory = ({data})=>{
    if (!data || data.length === 0) return null;
    const params = data[0].result_values || [];
    return(
        <div className={`${style.table} d-flex flex-column`}>
            <div className={`${style.head}`}>Medical Tests</div>
            <div className={`${style["t-body"]}`}>
                <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        {params.map((p) => (
                            <th key={p.param_id}>{p.param_name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map(d=>(
                        <tr key={d.test_result_id}>
                            <td>{d.result_date}</td>
                            {d.result_values?.map((rv,index)=>(
                                <td key={index}>{rv.value_numeric}-{rv.unit}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default PatientTestHistory;

