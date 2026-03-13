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

const LiveAppointment = ()=>{
    const {appointmentId} = useParams('appointmentId');
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setPatientId(3));
    },[appointmentId, dispatch])

        useEffect(()=>{
            dispatch(addLight("liveDashboard"));
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <h1>Live Appointment</h1>
                <EMRGeneral/>
                <div style={{display:'flex'}}>
                    <TestSection/>
                </div>
            </MainContent>
        </>
    )
}

export default LiveAppointment;