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
import { fetchAppointments } from "../features/appointments/fetchAppointments";
import { fetchDoctors } from '../features/appointments/fetchDoctors';
import { fetchPatients } from '../features/appointments/fetchPatients';
import { fetchReciptionists } from '../features/receptionist/fetchReciptionist';
const Dashboard = ()=>{
    const [cardData, setCardData] = useState({
        doctor: '',
        patient: '',
        recip: '',
        appoint: ''
    });
    const dispatch = useDispatch();
    useEffect(()=>{
        const loadAppointments = async()=>{
            const data = await fetchAppointments();
            setCardData(prev=>({...prev,appoint: data.length}));
        }
        const loadPatients = async()=>{
            const data = await fetchPatients();
            setCardData(prev=>({...prev,patient: data.length}));
        }
        const loadDoctors = async()=>{
            const data = await fetchDoctors();
            setCardData(prev=>({...prev,doctor: data.length}));
        }
        const loadRecip = async()=>{
            const data = await fetchReciptionists();
            setCardData(prev=>({...prev,recip: data.length}));
        }
        loadAppointments();
        loadPatients();
        loadRecip();
        loadDoctors();
        dispatch(addLight("dashboard"));
    },[])

    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <div className="info-card-list">
                    <InfoCard name = "Doctor" icon = {icons.doctor.light} data={cardData.doctor}/>
                    <InfoCard name = "Receptionist" icon = {icons.nurse.light} data={cardData.recip}/>
                    <InfoCard name = "Patients" icon = {icons.patients.light} data={cardData.patient}/>
                    <InfoCard name = "Appointments" icon = {icons.appointments.light} data={cardData.appoint}/>
                </div>
                <div className="table-list">
                    
                    
                </div>
                <div className="appoint-table">
                    <AppointmentsTable/>
                </div>
            </MainContent>
        </>
    )
}

export default Dashboard;