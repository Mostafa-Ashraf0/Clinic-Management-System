import { useEffect, useState } from "react";
import { getLastTestsByPatientId } from "../../features/emr/getLastTestsByPatientId";
import { useSelector, useDispatch } from "react-redux";
import style from '../../assets/liveAppointment/testSection.module.css';
import MedicalTestRecordForm from "../medicalTests/MedicalTestRecordForm";
import { setIsVisible } from "../../features/emr/testRecordFormSlice";

const TestSection = ()=>{
    const patientId = useSelector((state) => state.appointment.patientId);
    const [tests, setTests] = useState([]);
    const dispatch = useDispatch();
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


        const handleClick = ()=>{
            dispatch(setIsVisible(true));
        }

    return(
        <div className={style.main}>
            <div className={style.head}>
                <span className={style.title}>Medical Records</span>
                <button className={style.addBtn} onClick={handleClick}>Add New Record</button>
            </div>
            <div className={style.container}>
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
            <MedicalTestRecordForm
                onRecordAdd={()=>getTestData()}
            />
        </div>
    )
};

export default TestSection;