import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import EMRGeneral from "../components/EMRGeneral";
import EMRNavigationBar from "../components/EMRNavigationBar";
import TagsForm from "../components/TagsForm";
const PatientEmrGeneral = ()=>{
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
                <EMRGeneral/>
                <TagsForm/>
            </MainContent>
        </>
    )
}

export default PatientEmrGeneral;