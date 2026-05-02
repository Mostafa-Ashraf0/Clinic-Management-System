import style from '../assets/liveDashboard/addAppointmentView.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { icons } from '../assets/icons';
import DoctorForm from './DoctorForm';
import ReciptionistForm from './ReciptionistForm';
import PatientForm from './PatientForm';
import { setIsEdit } from '../features/doctors/doctorsSlice';

const EditFormView = ()=>{
    const dispatch = useDispatch();
    const closeIcon = icons.public.close;
    const doctorEdit = useSelector((state)=>state.doctor.isEdit);
    const handleClose = ()=>{
        dispatch(setIsEdit(false));
    }

    return(
        <div className={style.main}>
            
            <div className={style.container}>
                <span onClick={handleClose} className={style.close}>
                <img src={closeIcon} alt='close'/>
                </span>
                {doctorEdit &&
                <DoctorForm/>
                }
            </div>
        </div>
    )
};


export default EditFormView;