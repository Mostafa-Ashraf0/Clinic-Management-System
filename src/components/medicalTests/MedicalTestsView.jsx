import style from '../../assets/medicalTest/medicalTestsView.module.css';
import { icons } from '../../assets/icons';
import MedicalTestForm from './MedicalTestForm';
import MedicalTestCard from './MedicalTestCard';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../../features/medicalTests/medicalTestFormSlice';
import MedicalTestTable from './MedicalTestTable';
import { useState, useEffect } from 'react';
import { fetchMedicalTest } from '../../features/medicalTests/fetchMedicalTests';

const MedicalTestsView = ()=>{
    const [tests, setTests] = useState([]);
    const [selectedTest, setSelectedTest] = useState(null);
    const getMedicalTests = async()=>{
            const data = await fetchMedicalTest();
            if(data){
                setTests(data);
            }
        };
    useEffect(()=>{
        getMedicalTests();
    },[])
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
            <MedicalTestTable
            data = {tests}
            getTests = {getMedicalTests}
            setTest = {setSelectedTest}
            />
            <MedicalTestCard
            data = {selectedTest}/>
            <MedicalTestForm
            onTestAdded = {getMedicalTests}
            />
        </div>
    )
};


export default MedicalTestsView;