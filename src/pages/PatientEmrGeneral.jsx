import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import EMRGeneral from "../components/EMRGeneral";
import EMRNavigationBar from "../components/EMRNavigationBar";
import Overlay from "../components/Overlay";
import LastAppointmentsFullView from "../components/LiveAppointment/LastAppointmentsFullView";

const PatientEmrGeneral = ()=>{
    const dispatch = useDispatch();
    const {latestAppointFullView} = useSelector((state)=>state.fullView);
    const { mobileVisible } = useSelector((state)=>state.sidebar);
        useEffect(()=>{
            dispatch(addLight("patients"));
        },[dispatch])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                {latestAppointFullView && <LastAppointmentsFullView/>}
                <EMRNavigationBar/>
                <EMRGeneral/>
            </MainContent>
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default PatientEmrGeneral;