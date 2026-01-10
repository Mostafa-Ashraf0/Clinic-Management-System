import style from '../assets/EMR.module.css';
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
    const [response, setResponse] = useState([]);
    const fetchTags = async()=>{
            const data = await getTags(patientId);
            setResponse(data);
            console.log(data)
        };
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(setIsVisible(true));
    }
    useEffect(()=>{
        fetchTags();
    },[patientId])

    const pColor = {
        high: {
            bg: '#e22b1aff',
            color: 'white'
        },
        medium: {
            bg: '#eea514ff',
            color: 'white'
        },
        low: {
            bg:'#AEDFF7',
            color: '#0A3D62 '
        }
    }

    return(
        <div className={style.emr}>
            <div className={style.info}>
                <EmrGeneralInfo/>
                <div className={style.tags}>
                    <div className={style.head}>
                        <span className={style.title}>Important Tags</span>
                        <button onClick={handleClick}>open</button>
                    </div>
                    <div className={style.tags_box}>
                        {response && (response.map((res)=>
                        <span 
                        key={res.id} 
                        className={style.tag}
                        style={{backgroundColor:pColor[res.priority].bg,
                            color: pColor[res.priority].color
                        }}>
                            {res.tag}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
            <LastAppointmentDetails/>
            <TagsForm onTagAdded = {fetchTags}/>
        </div>
    )
};

export default EMRGeneral;