import style from '../../assets/operations/medicalOperations.module.css';
import { icons } from '../../assets/icons';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../../features/operations/operationsFormSlice';
import AddOperationsForm from './AddOperationFrom';
import { fetchOperations } from '../../features/operations/getOperations';
import { useState, useEffect } from 'react';
import OperationsTable from './OperationsTable';
import ScheduleOperationForm from './ScheduleOperationForm';


const OperationsView = ()=>{
    const [tests, setTests] = useState([]);
    const dispatch = useDispatch();


    const getOperations = async()=>{
        const data = await fetchOperations();
        if(data){
            console.log(data);
            setTests(data);
        }
        };
        useEffect(()=>{
            getOperations();
        },[])

    const handleClick = ()=>{
        dispatch(setIsVisible(true));
    }
    return(
        <div className={style.main}>
            <div className={style.head}>
                <span className={style.title}>Medical Operations</span>
                <button className={style.add}>
                    <img src={icons.control.add} alt="add" />
                    <span className={style.text} onClick={handleClick}>Create New Operation</span>
                </button>
            </div>
            <OperationsTable data={tests}/>
            <AddOperationsForm onTestAdded = {getOperations}/>
            <ScheduleOperationForm/>
        </div>
    )
};


export default OperationsView;