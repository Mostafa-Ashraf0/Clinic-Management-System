import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import EMRGeneral from "../components/EMRGeneral";
import { useParams } from "react-router-dom";
import { setPatientId } from "../features/appointments/appointmentSlice";
import TestSection from "../components/LiveAppointment/TestSection";
import FilesSection from "../components/LiveAppointment/FilesSection";
import InputDetails from "../components/LiveAppointment/InputDetails";
import { fetchAppointmentById } from "../features/appointments/fetchAppointmentById";

const LiveAppointment = ()=>{
    const {appointmentId} = useParams();
    const dispatch = useDispatch();


    useEffect(()=>{
        const getAppointment = async()=>{
            dispatch(setPatientId(null));
            const data = await fetchAppointmentById(appointmentId);
            if(data){
                dispatch(setPatientId(data.patient_id));
            }
        }
        getAppointment();
        dispatch(addLight("liveDashboard"));
    },[appointmentId, dispatch])


    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <h1>Live Appointment</h1>
                <EMRGeneral/>
                <div style={{display:'flex', gap:'10px', marginBottom:'30px'}}>
                    <TestSection/>
                    <FilesSection/>
                </div>
                <InputDetails/>
            </MainContent>
        </>
    )
}

export default LiveAppointment;