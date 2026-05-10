import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import AppointmentForm from "../components/AppointmentForm";
import Overlay from "../components/Overlay";

const AddAppointment = ()=>{
    const dispatch = useDispatch();
    const { mobileVisible } = useSelector((state)=>state.sidebar);
        useEffect(()=>{
            dispatch(addLight("appointments"));
        },[dispatch])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <AppointmentForm/>
            </MainContent>
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default AddAppointment;