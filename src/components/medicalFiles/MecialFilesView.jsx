import style from '../../assets/medicalFiles/medicalFilesView.module.css';
import FileUploadForm from './FileUploadForm';

const MedicalFilesView = ()=>{
    return(
        <div className={style.main}>
            <div className={style.head}>
                <span className={style.title}>Medical Files</span>
                <button className={style.addBtn}>Add New File</button>
            </div>
            <FileUploadForm/>
        </div>
    )
}

export default MedicalFilesView;