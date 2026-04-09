import style from '../../assets/operations/medicalOperations.module.css';
import { icons } from '../../assets/icons';
import { useDispatch } from 'react-redux';
import { setIsVisible, setIsScheduleVisible } from '../../features/operations/operationsFormSlice';
import AddOperationsForm from './AddOperationFrom';
import { fetchOperations } from '../../features/operations/getOperations';
import { useState, useEffect } from 'react';
import OperationsTable from './OperationsTable';
import ScheduleOperationForm from './ScheduleOperationForm';
import { fetchScheduleOps } from '../../features/operations/getScheduleOps';
import ScheduleOpsTable from './ScheduleOpsTable';


const OperationsView = ()=>{
    const [operations, setOperations] = useState([]);
    const [scheduleOps, setScheduleOps] = useState([]);
    const dispatch = useDispatch();


    const getOperations = async()=>{
    const data = await fetchOperations();
    
    if(data){
        setOperations(data);
    }
    
    };

    const getScheduleOps = async()=>{
        const ScheduleData = await fetchScheduleOps();
        if(ScheduleData){
            console.log(ScheduleData)
            setScheduleOps(ScheduleData);
        }
    }
    
    useEffect(()=>{
        getOperations();
        getScheduleOps();
    },[])

    const handleClick = ()=>{
        dispatch(setIsVisible(true));
    }
    const handleScheduleClick = ()=>{
        dispatch(setIsScheduleVisible(true));
    }
    return(
        <div className={style.main}>
            <div className={style.head}>
                <span className={style.title}>Medical Operations</span>
                <button className={style.add}>
                    <img src={icons.control.add} alt="add" />
                    <span className={style.text} onClick={handleClick}>Create New Operation</span>
                </button>
                <button className={style.add}>
                    <img src={icons.control.add} alt="add" />
                    <span className={style.text} onClick={handleScheduleClick}>Schedule Operation</span>
                </button>
            </div>
            <OperationsTable data={operations}/>
            <AddOperationsForm onTestAdded = {getOperations}/>
            <ScheduleOperationForm onTestAdded = {getScheduleOps}/>
            <ScheduleOpsTable data={scheduleOps}/>
        </div>
    )
};


export default OperationsView;