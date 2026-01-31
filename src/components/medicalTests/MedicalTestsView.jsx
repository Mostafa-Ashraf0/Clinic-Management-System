import style from '../../assets/medicalTest/medicalTestsView.module.css';
import { icons } from '../../assets/icons';
import MedicalTestForm from './MedicalTestForm';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../../features/medicalTests/medicalTestFormSlice';

const MedicalTestsView = ()=>{
    const dispatch = useDispatch();
        const handleClick = ()=>{
            dispatch(setIsVisible(true));
        }
    return(
        <div className={style.main}>
            <div className={style.head}>
                <span className={style.title}>Medical Tests</span>
                <button onClick={handleClick} className={style.add}>
                    <img src={icons.control.add} alt="add" />
                    <span className={style.text}>Create New Test</span>
                </button>
            </div>
            <MedicalTestForm/>
        </div>
    )
};


export default MedicalTestsView;