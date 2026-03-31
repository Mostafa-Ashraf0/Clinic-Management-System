import style from '../../assets/medicalFiles/medicalFilesView.module.css';
import FileUploadForm from './FileUploadForm';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../../features/emr/filesFormSlice';
import { getFilesByPatientId } from '../../features/medicalFiles/getFilesByPatientId';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FileCard from './FileCard';
import { useSelector } from 'react-redux';

const MedicalFilesView = ()=>{
    const globalPatientId = useSelector((state) => state.appointment.patientId);
    const {patientId} = useParams();
    const [files, setFiles] = useState([]);
    useEffect(()=>{
        const fetchFiles = async()=>{
            const res = await getFilesByPatientId(patientId || globalPatientId );
            if(res){
                setFiles(res);
            }
        }
        fetchFiles();
    },[patientId, globalPatientId])
    useEffect(()=>{
        console.log(files)
    },[files])
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(setIsVisible(true));
    }
    return(
        <div className={style.main}>
            <div className={style.head}>
                <span className={style.title}>Medical Files</span>
                <button className={style.addBtn} onClick={handleClick}>Add New File</button>
            </div>
            <div className={style.cardsBox}>
                {files?.map(f=>(
                    <FileCard
                    key={f.id}
                    data = {f}
                    appointView = {false}
                    />
                ))}
            </div>
            <FileUploadForm/>
        </div>
    )
}

export default MedicalFilesView;