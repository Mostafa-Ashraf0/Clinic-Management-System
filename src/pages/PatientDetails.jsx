import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import EMR from "../components/EMR";
const PatientDetails = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("patients"));
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <EMR/>
            </MainContent>
        </>
    )
}

export default PatientDetails;