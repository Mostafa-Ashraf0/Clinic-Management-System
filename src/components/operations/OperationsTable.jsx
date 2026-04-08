import style from '../../assets/medicalTest/medicalTestTable.module.css';

const OperationsTable = ({data})=>{
    
    return(
        <div className={`${style.table} d-flex flex-column`}>
                    <div className={`${style.head}`}>Medical Tests</div>
                    <div className={`${style["t-body"]}`}>
                        <table>
                        <thead>
                            <tr>
                                <th>Operation</th>
                                <th>Category</th>
                                <th>Clinic</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map(t=>(
                                <tr key={t.id}>
                                    <td className={style.name}>{t.name}</td>
                                    <td>{t.operations_category?.name}</td>
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

export default OperationsTable;