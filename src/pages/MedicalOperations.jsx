import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import OperationsView from "../components/operations/OperationsView";
import Loading from "../components/Loading";
import Overlay from "../components/Overlay";
import { setMobileVisible } from "../features/dashboard/sidebarSlice";

const MedicalOperations = ()=>{
    const dispatch = useDispatch();
    const { mobileVisible } = useSelector((state)=>state.sidebar);
    const { generalLoading } = useSelector((state)=>state.operationsForm);

        useEffect(()=>{
            dispatch(addLight("operations"));
            dispatch(setMobileVisible(false));
        },[dispatch]);

    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <OperationsView/>
            </MainContent>
            {generalLoading && <Loading/>}
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default MedicalOperations;