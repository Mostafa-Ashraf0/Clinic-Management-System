import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import EMRGeneral from "../components/EMRGeneral";
import EMRNavigationBar from "../components/EMRNavigationBar";
import Overlay from "../components/Overlay";

const PatientEmrGeneral = ()=>{
    const dispatch = useDispatch();
    const { mobileVisible } = useSelector((state)=>state.sidebar);
        useEffect(()=>{
            dispatch(addLight("patients"));
        },[dispatch])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <EMRNavigationBar/>
                <EMRGeneral/>
            </MainContent>
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default PatientEmrGeneral;