import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import OperationsView from "../components/operations/OperationsView";
import Loading from "../components/Loading";
const MedicalOperations = ()=>{
    const dispatch = useDispatch();
    const { generalLoading } = useSelector((state)=>state.operationsForm);

        useEffect(()=>{
            dispatch(addLight("operations"));
        },[dispatch]);

    return(
        <>
            <Sidebar/>
            <MainContent>
                <OperationsView/>
            </MainContent>
            {generalLoading && <Loading/>}
        </>
    )
}

export default MedicalOperations;