import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import MedicalTestsView from "../components/medicalTests/MedicalTestsView";
const MedicalTests = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("medicalTests"));
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <MedicalTestsView/>
            </MainContent>
        </>
    )
}

export default MedicalTests;