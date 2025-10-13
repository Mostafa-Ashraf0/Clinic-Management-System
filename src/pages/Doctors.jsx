import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import DoctorsControl from "../components/DoctorsControl";
const Doctors = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("doctors"));
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <DoctorsControl/>
            </MainContent>
        </>
    )
}

export default Doctors;