import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import PatientForm from "../components/PatientForm";
import Overlay from "../components/Overlay";

const AddReciptionist = ()=>{
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
                <PatientForm/>
            </MainContent>
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default AddReciptionist;