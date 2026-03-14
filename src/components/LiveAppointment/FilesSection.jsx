import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getLastFilesByPatientId } from "../../features/medicalFiles/getLatestFilesByPatientId";
import { setIsVisible } from "../../features/emr/filesFormSlice";
import FileCard from "../medicalFiles/FileCard";
import FileUploadForm from "../medicalFiles/FileUploadForm";
import style from '../../assets/liveAppointment/filesSection.module.css';


const FilesSection = ()=>{
    const patientId = useSelector((state) => state.appointment.patientId);
    const dispatch = useDispatch();
    const [files, setFiles] = useState([]);
    const fetchFiles = async()=>{
        const res = await getLastFilesByPatientId(patientId);
        if(res){
            setFiles(res);
        }
    }
    useEffect(()=>{
        if(!patientId) return;
        fetchFiles();
    },[patientId]);

    useEffect(()=>{
        console.log(files)
    },[files])

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
                    appointView = {true}
                    />
                ))}
            </div>
            <FileUploadForm />
        </div>
    )
};

export default FilesSection;