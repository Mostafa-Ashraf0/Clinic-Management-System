import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import OperationsView from "../components/operations/OperationsView";
const MedicalOperations = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("operations"));
        },[])
    return(
        <>
            <Sidebar/>
            <MainContent>
                <OperationsView/>
            </MainContent>
        </>
    )
}

export default MedicalOperations;