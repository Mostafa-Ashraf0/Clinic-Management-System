import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import MedicalTestsView from "../components/medicalTests/MedicalTestsView";
import Loading from "../components/Loading";
import Overlay from "../components/Overlay";
import { setMobileVisible } from "../features/dashboard/sidebarSlice";

const MedicalTests = ()=>{
    const { mobileVisible } = useSelector((state)=>state.sidebar);
    const loading = useSelector((state)=> state.medicalTestForm.generalLoading);
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("medicalTests"));
            dispatch(setMobileVisible(false));
        },[dispatch])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <MedicalTestsView/>
            </MainContent>
            {loading && <Loading/>}
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default MedicalTests;