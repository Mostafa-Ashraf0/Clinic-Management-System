import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import MedicalFilesView from "../components/medicalFiles/MecialFilesView";
import EMRNavigationBar from "../components/EMRNavigationBar";
const PatientEmrFiles = ()=>{
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
                <MedicalFilesView/>
            </MainContent>
        </>
    )
}

export default PatientEmrFiles;