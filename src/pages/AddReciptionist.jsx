import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import ReciptionistForm from "../components/ReciptionistForm";
import Overlay from "../components/Overlay";
import Loading from "../components/Loading";

const AddReciptionist = ()=>{
    const dispatch = useDispatch();
    const loading = useSelector((state)=>state.recip.loading);
    const { mobileVisible } = useSelector((state)=>state.sidebar);
        useEffect(()=>{
            dispatch(addLight("receptionists"));
        },[dispatch])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <ReciptionistForm/>
            </MainContent>
            {mobileVisible && <Overlay/>}
            {loading && <Loading/>}
        </>
    )
}

export default AddReciptionist;