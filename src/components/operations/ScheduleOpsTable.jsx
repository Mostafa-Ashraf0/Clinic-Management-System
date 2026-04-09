import style from '../../assets/medicalTest/medicalTestTable.module.css';

const ScheduleOpsTable = ({data})=>{
    
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
                                <th>Clinic</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map(t=>(
                                <tr key={t.id}>
                                    <td className={style.name}>{t.medical_operations.name}</td>
                                    <td>{t.doctor_extra.profile.name}</td>
                                    <td>{t.patient.name}</td>
                                    <td>{t.clinic.name}</td>
                                    <td>{t.date}</td>
                                    <td>action</td>
                                </tr>
                            ))}
                        </tbody>
            </table>
            </div>
        </div>
    )
};

export default ScheduleOpsTable;