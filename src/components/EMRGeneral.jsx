import style from '../assets/EMR.module.css';
import { icons } from '../assets/icons';
import EmrGeneralInfo from './EmrGeneralInfo';
import LastAppointmentDetails from './LastAppointmentDetails';
import TagsForm from './TagsForm';
import { setIsVisible } from '../features/emr/tagsFormSlice';
import { getTags } from '../features/emr/getTags';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EMRGeneral = ()=>{
    const {patientId} = useParams();
    const [action, setAction] = useState("add");
    const [tagData, setTagData] = useState({})
    const [response, setResponse] = useState([]);
    const fetchTags = async()=>{
            const data = await getTags(patientId);
            setResponse(data);
            console.log(data)
        };
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(setIsVisible(true));
        setAction("add");
    }
    useEffect(()=>{
        fetchTags();
    },[patientId])

    const pColor = {
        high: {
            bg: '#E5533D',
            color: '#FFFFFF'
        },
        medium: {
            bg: '#F59E0B',
            color: '#FFFFFF'
        },
        low: {
            bg: '#22C55E',
            color: '#FFFFFF'
        }
    }
    
    const handleTagClick = (res)=>{
        dispatch(setIsVisible(true));
        setAction("edit");
        setTagData(res);
    }

    return(
        <div className={style.emr}>
            <div className={style.info}>
                <EmrGeneralInfo/>
                <div className={style.tags}>
                    <div className={style.head}>
                        <span className={style.title}>Important Tags</span>
                        <button onClick={handleClick} className={style.addBtn}>
                            <img src={icons.control.add} alt="" />
                            Add Tag
                            </button>
                    </div>
                    <div className={style.tags_box}>
                        {response && (response.map((res)=>
                        <span 
                        onClick={()=>handleTagClick(res)}
                        key={res.id} 
                        className={style.tag}
                        style={{backgroundColor:pColor[res.priority].bg,
                            color: pColor[res.priority].color
                        }}>
                            <img src={icons.tags.tagIcon} alt="I" className={style.icon} />
                            {res.tag}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
            <LastAppointmentDetails/>
            <TagsForm 
            onTagAdded = {fetchTags} 
            formAction = {action}
            data = {tagData}
            />
        </div>
    )
};

export default EMRGeneral;