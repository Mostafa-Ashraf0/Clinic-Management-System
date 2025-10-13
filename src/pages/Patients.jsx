import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import PatientControl from "../components/PatientControl"
const Patients = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("patients"));
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <PatientControl/>
            </MainContent>
        </>
    )
}

export default Patients;