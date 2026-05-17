import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UserDropdown from "../components/UserDropdown";
import InfoCard from "../components/InfoCard";
import Table from "../components/Table";
import MainContent from "../components/MainContent";
import AppointmentsTable from "../components/AppointmentsTable";
import '../assets/dashboard.css';
import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { icons } from "../assets/icons";
import { getRecepCount } from "../features/receptionist/getRecepCount";
import { useSelector } from "react-redux";
import { setMobileVisible } from "../features/dashboard/sidebarSlice";
import Overlay from "../components/Overlay";
import {getAppointmentCount} from "../features/appointments/getAppointmentsCount";
import { getDoctorCount } from  "../features/doctors/getDoctorsCount";
import { getPatientCount } from "../features/patient/getPatientCount";

const Dashboard = ()=>{
    const [cardData, setCardData] = useState({
        doctor: '',
        patient: '',
        recip: '',
        appoint: ''
    });
    const { mobileVisible } = useSelector((state)=>state.sidebar);
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(!clinicId) return;
        const loadAppointments = async()=>{
            console.log(`clinicId is: ${clinicId}`)
            const data = await getAppointmentCount(clinicId);
            setCardData(prev=>({...prev,appoint: data}));
        }
        const loadPatients = async()=>{
            const data = await getPatientCount(clinicId);
            setCardData(prev=>({...prev,patient: data}));
        }
        const loadDoctors = async()=>{
            const data = await getDoctorCount(clinicId);
            setCardData(prev=>({...prev,doctor: data}));
        }
        const loadRecip = async()=>{
            const data = await getRecepCount(clinicId);
            setCardData(prev=>({...prev,recip: data}));
        }
        loadAppointments();
        loadPatients();
        loadDoctors();
        loadRecip();
        dispatch(addLight("dashboard"));
        dispatch(setMobileVisible(false));
    },[clinicId,dispatch])



    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <div className="info-card-list">
                    <InfoCard name = "Doctor" icon = {icons.doctor.light} data={cardData?.doctor}/>
                    <InfoCard name = "Receptionist" icon = {icons.nurse.light} data={cardData?.recip}/>
                    <InfoCard name = "Patients" icon = {icons.patients.light} data={cardData?.patient}/>
                    <InfoCard name = "Appointments" icon = {icons.appointments.light} data={cardData?.appoint}/>
                </div>
                <div className="table-list">
                    
                    
                </div>
            </MainContent>
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default Dashboard;