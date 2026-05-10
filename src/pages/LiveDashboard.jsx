import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addLight } from "../features/dashboard/sidebarSlice";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Dashboard from "../components/LiveDashboard/Dashboard";
import Loading from "../components/Loading";
import Overlay from "../components/Overlay";
import { setMobileVisible } from "../features/dashboard/sidebarSlice";

const LiveDashboard = () => {
    const { mobileVisible } = useSelector((state)=>state.sidebar);
    const loading = useSelector((state)=>state.appointment.generalLoading); 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setMobileVisible(false));
        dispatch(addLight("liveDashboard"));
    },[dispatch])

    
    return (
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <Dashboard/>
            </MainContent>
            {loading && <Loading/>}
            {mobileVisible && <Overlay/>}
        </>
    );
    };

export default LiveDashboard;