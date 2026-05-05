import style from '../../assets/operations/medicalOperations.module.css';
import { icons } from '../../assets/icons';
import { useDispatch,useSelector } from 'react-redux';
import { setIsVisible, setIsScheduleVisible, setTableVisible } from '../../features/operations/operationsFormSlice';
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
    const { isVisible } = useSelector((state)=>state.operationsForm);
    const { isEditOps } = useSelector((state)=>state.operationsForm);
    const { tableVisible } = useSelector((state)=>state.operationsForm);
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

    const handleShowOps = ()=>{
        dispatch(setTableVisible(true));
    }

    const handleClose = ()=>{
        dispatch(setTableVisible(false));
    }

    return(
        <div className={style.main}>
            <div className={style.head}>
                <span className={style.title}>Medical Operations</span>
                <button className={style.add}>
                    <img src={icons.control.add} alt="add" />
                    <span className={style.text} onClick={handleScheduleClick}>Schedule Operation</span>
                </button>
            </div>
            {tableVisible && <div className={style.opsTableContainer}>
                <div className={style.inner}>
                    <img src={icons.public.close} alt="close" onClick={handleClose}/>
                    <OperationsTable data={operations}/>
                </div>
            </div>}
            {(isVisible || isEditOps) && <AddOperationsForm onTestAdded = {getOperations}/>}
            <ScheduleOperationForm onTestAdded = {getScheduleOps}/>
            <ScheduleOpsTable data={scheduleOps}/>
            <div className={style.opsBtns}>
                <button className={style.create}>
                    <img src={icons.control.add} alt="add" />
                    <span className={style.text} onClick={handleClick}>Create New Operation</span>
                </button>
                <span className={style.eye} onClick={handleShowOps}>
                    <img src={icons.operations.eye} alt="View Operations" />
                </span>
            </div>
        </div>
    )
};


export default OperationsView;