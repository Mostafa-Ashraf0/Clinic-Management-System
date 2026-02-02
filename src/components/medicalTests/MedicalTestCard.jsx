import { useEffect } from 'react';
import style from '../../assets/medicalTest/medicalTestCard.module.css';

const MedicalTestCard = ({data})=>{
    useEffect(()=>{
        console.log(data);
    },[data])
    return(
        <div className={style.main}>
            <div className={style.card}>
                <div className={style.head}>{data?.test.name} Test Details</div>
                <div className={style.body}>
                    <div className={style.section}>
                        <div className={style.item}>
                            <span>Category:</span>
                            <span className={style.value}>{data?.test?.category.name || 'none'}</span>
                        </div>
                        <div className={style.item}>
                            <span>Status:</span>
                            <span className={style.value}>{data?.test?.status?.name || 'Active'}</span>
                        </div>
                    </div>
                    <div className={style.section}>
                        <span>Parameters:</span>
                        <ul>
                            {data && data.params.map(p=>(
                                <li key={p.id} className={style.list}>
                                    <span>{p.name}</span>
                                    <span className={style.type}>{p.type}</span>
                                    <span className={style.min}>{p.min_value}</span>
                                    <span className={style.max}>{p.max_value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MedicalTestCard;