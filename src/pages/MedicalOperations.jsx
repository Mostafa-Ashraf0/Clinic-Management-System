import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
const MedicalOperations = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("operations"));
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <div>Medical Operations</div>
            </MainContent>
        </>
    )
}

export default MedicalOperations;