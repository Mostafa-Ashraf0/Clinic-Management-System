import style from '../assets/liveDashboard/addAppointmentView.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { icons } from '../assets/icons';
import DoctorForm from './DoctorForm';
import ReciptionistForm from './ReciptionistForm';
import PatientForm from './PatientForm';
import { setIsEdit } from '../features/doctors/doctorsSlice';
import { setIsEditRecip } from '../features/receptionist/reciptionistSlice';
import { setIsEditPatient } from '../features/patient/patientSlice';

const EditFormView = ()=>{
    const dispatch = useDispatch();
    const closeIcon = icons.public.close;
    const doctorEdit = useSelector((state)=>state.doctor.isEdit);
    const recipEdit = useSelector((state)=>state.recip.isEditRecip);
    const patientEdit = useSelector((state)=>state.patient.isEditPatient);

    const handleClose = ()=>{
        dispatch(setIsEdit(false));
        dispatch(setIsEditRecip(false));
        dispatch(setIsEditPatient(false));
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
                {recipEdit &&
                <ReciptionistForm/>
                }
                {patientEdit && 
                <PatientForm/>
                }
            </div>
        </div>
    )
};


export default EditFormView;