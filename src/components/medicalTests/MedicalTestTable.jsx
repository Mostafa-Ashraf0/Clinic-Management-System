import style from '../../assets/medicalTest/medicalTestTable.module.css';
import { getParams } from '../../features/medicalTests/getParams';

const MedicalTestTable = ({data, setTest})=>{
    const handleClick = async(id)=>{
        const params = await getParams(id);
        const selectedTest = data.find(d => d.id === id);
        if(selectedTest) setTest(
            {
                test:selectedTest,
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
                                    <td onClick={()=>handleClick(t.id)}>{t.name}</td>
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