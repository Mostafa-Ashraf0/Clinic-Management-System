import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import DoctorForm from "../components/DoctorForm";
import Overlay from "../components/Overlay";
const AddDoctor = ()=>{
    const dispatch = useDispatch();
    const { mobileVisible } = useSelector((state)=>state.sidebar);
        useEffect(()=>{
            dispatch(addLight("doctors"));
        },[dispatch])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <DoctorForm/>
            </MainContent>
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default AddDoctor;