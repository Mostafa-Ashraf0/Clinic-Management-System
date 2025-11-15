import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import AppointmentControl from "../components/AppointmentControl";
import AppointmentsTable from "../components/AppointmentsTable";
const Appointments = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("appointments"));
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <AppointmentControl/>
                <AppointmentsTable/>
            </MainContent>
        </>
    )
}

export default Appointments;