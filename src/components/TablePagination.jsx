import style from '../assets/tablePagination.module.css';
import left from '../../public/left-arrow-next-svgrepo-com.svg';
import right from '../../public/right-arrow-next-svgrepo-com.svg';
import { setCurrentTablePage as setAppointmentPage } from '../features/appointments/appointmentSlice';
import { setCurrentTablePage as  setDoctorPage} from '../features/doctors/doctorsSlice';
import { setCurrentTablePage as  setPatientPage} from '../features/patient/patientSlice';
import { setCurrentTablePage as  setRecepPage} from '../features/receptionist/reciptionistSlice';
import { useSelector, useDispatch } from 'react-redux';

const TablePagination = ({limit, countData, table})=>{
    const dispatch = useDispatch();
    const AppoCurrentPage = useSelector((state)=>state.appointment.currentTablePage);
    const DoctorCurrentPage = useSelector((state)=>state.doctor.currentTablePage);
    const PatientCurrentPage = useSelector((state)=>state.patient.currentTablePage);
    const RecepCurrentPage = useSelector((state)=>state.recip.currentTablePage);
    let currentPage;
    if(table === 'appointment'){
        currentPage = AppoCurrentPage;
    }else if(table === 'doctor'){
        currentPage = DoctorCurrentPage;
    }else if(table === 'patient'){
        currentPage = PatientCurrentPage;
    }else if(table === 'receptionist'){
        currentPage = RecepCurrentPage;
    }

    const setPage = (page) => {
    if (table === 'appointment') {
        dispatch(setAppointmentPage(page));
    } else if (table === 'doctor') {
        dispatch(setDoctorPage(page));
    } else if (table === 'patient') {
        dispatch(setPatientPage(page));
    } else if (table === 'receptionist') {
        dispatch(setRecepPage(page));
    }
};

    const start = (currentPage - 1) * limit + 1;
    const end = Math.min(limit * currentPage, countData);
    const totalPages = Math.ceil(countData / limit);
    const text = `Showing ${start}-${end} of ${countData} entries`;

    const handleClick = (page)=>{
        setPage(page);
    }

    const increment = ()=>{
        if(currentPage < totalPages){
            setPage(currentPage + 1)
        }
        
    }

    const decrement = ()=>{
        if(currentPage > 1){
            setPage(currentPage - 1)
        }
        
    }

    return(
        <div className={style.main}>
            <div className={style.left}>
                <span>{text}</span>
            </div>
            <div className={style.right}>
                <span onClick={decrement}>
                    <img src={left} alt='prev'/>
                </span>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <span 
                    key={i} 
                    onClick={()=>handleClick(i+1)}
                    style={
                        currentPage === i + 1
                        ? { backgroundColor: "rgb(74, 144, 226)", color:"white" }
                        : {}
                    }   
                    >{i + 1}</span>
                ))}
                <span onClick={increment}>
                    <img src={right} alt='next'/>
                </span>
            </div>
        </div>
    )
};

export default TablePagination;