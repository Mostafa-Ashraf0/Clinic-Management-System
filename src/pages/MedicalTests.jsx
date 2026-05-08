import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import MedicalTestsView from "../components/medicalTests/MedicalTestsView";
import Loading from "../components/Loading";

const MedicalTests = ()=>{
    const loading = useSelector((state)=> state.medicalTestForm.generalLoading);
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("medicalTests"));
        },[dispatch])
    return(
        <>
            <Sidebar/>
            <MainContent>
                <MedicalTestsView/>
            </MainContent>
            {loading && <Loading/>}
        </>
    )
}

export default MedicalTests;