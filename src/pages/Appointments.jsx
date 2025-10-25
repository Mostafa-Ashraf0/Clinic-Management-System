import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import AppointmentControl from "../components/AppointmentControl";
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
            </MainContent>
        </>
    )
}

export default Appointments;