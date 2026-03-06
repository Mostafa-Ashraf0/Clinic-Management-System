import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import EMRGeneral from "../components/EMRGeneral";
import EMRNavigationBar from "../components/EMRNavigationBar";
const LiveAppointment = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("liveDashboard"));
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <h1>Live Appointment</h1>
            </MainContent>
        </>
    )
}

export default LiveAppointment;