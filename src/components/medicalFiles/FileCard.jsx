import style from '../../assets/medicalFiles/fileCard.module.css';

const FileCard = ({data})=>{
    const supabaseUrl = 'https://mfszjvpkrzlhftegkfow.supabase.co/storage/v1/object/public/imageFiles/'
    return(
        <div className={style.main}>
            <img src={`${supabaseUrl}${data.url}`} alt='file'/>
            <div className={style.body}>
                <p>Notes: {data.notes}</p>
                <span>Date: {data.created_at.split('T')[0]}</span>
            </div>
        </div>
    )
}

export default FileCard;