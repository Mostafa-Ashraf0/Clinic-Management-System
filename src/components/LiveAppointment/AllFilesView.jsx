import style from '../../assets/liveAppointment/allFilesView.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setFilesVisible } from '../../features/liveAppointment/fullViewSlice';
import { icons } from '../../assets/icons';
import MedicalFilesView from '../medicalFiles/MecialFilesView';

const AllFilesView = ()=>{
    const dispatch = useDispatch();
    const {filesVisible} = useSelector((state)=>state.fullView);
    const closeIcon = icons.public.close;

    const handleClick = ()=>{
        dispatch(setFilesVisible(false))
    }
    return(
        <div className={style.main}
        style={filesVisible?{display:'flex'}:{display:'none'}}
        >
            <div className={style.container}>
                    <span onClick={handleClick} className={style.close}>
                        <img src={closeIcon} alt='close'/>
                    </span>
                <MedicalFilesView/>
            </div>
        </div>
    )
};

export default AllFilesView;