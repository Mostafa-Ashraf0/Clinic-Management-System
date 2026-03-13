import { useEffect, useState } from "react";
import { getLastTestsByPatientId } from "../../features/emr/getLastTestsByPatientId";
import { useSelector } from "react-redux";
import style from '../../assets/liveAppointment/testSection.module.css';


const TestSection = ()=>{
    const patientId = useSelector((state) => state.appointment.patientId);
    const [tests, setTests] = useState([]);
    //fetch test data
    const getTestData = async()=>{
        const tests = await getLastTestsByPatientId(patientId);
        if(tests) setTests(tests);
    }

    useEffect(()=>{
        if(!patientId) return;
        console.log(patientId)
        getTestData();
    },[patientId])

    useEffect(()=>{
        console.log(tests);
    },[tests])

    return(
        <div className={style.main}>
            {tests?.map(t=>(
                <div key={t.test_result_id} className={style.test}>
                    <div className={style.head}>
                        <div className={style.info}>
                            <span>{t.test_name}</span>
                            <span>({t.category_name})</span>
                        </div>
                        <span>{t.result_date}</span>
                    </div>
                    <ul>
                    {t.result_values.map(v=>(
                        <li key={v.param_id}>
                            {v.param_name}: {v.value_numeric} {v.unit}
                        </li>
                    ))}
                    </ul>
                </div>
            ))}
        </div>
    )
};

export default TestSection;