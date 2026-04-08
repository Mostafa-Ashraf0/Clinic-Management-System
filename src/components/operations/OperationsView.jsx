import style from '../../assets/operations/medicalOperations.module.css';
import { icons } from '../../assets/icons';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../../features/operations/operationsFormSlice';
import AddOperationsForm from './AddOperationFrom';

const OperationsView = ()=>{
    const dispatch = useDispatch();
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
            <AddOperationsForm/>
        </div>
    )
};


export default OperationsView;