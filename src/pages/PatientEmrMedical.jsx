import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import EMRNavigationBar from "../components/EMRNavigationBar";
import EmrMedicalInfo from "../components/EmrMedicalInfo";
import Overlay from "../components/Overlay";

const PatientEmrMedical = ()=>{
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
                <EmrMedicalInfo/>
            </MainContent>
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default PatientEmrMedical;