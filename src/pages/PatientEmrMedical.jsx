import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import EMRNavigationBar from "../components/EMRNavigationBar";
import EmrMedicalInfo from "../components/EmrMedicalInfo";
const PatientEmrMedical = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("patients"));
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <EMRNavigationBar/>
                <EmrMedicalInfo/>
            </MainContent>
        </>
    )
}

export default PatientEmrMedical;