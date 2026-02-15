import style from '../../assets/medicalFiles/medicalFilesView.module.css';
import FileUploadForm from './FileUploadForm';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../../features/emr/filesFormSlice';

const MedicalFilesView = ()=>{
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
            <FileUploadForm/>
        </div>
    )
}

export default MedicalFilesView;