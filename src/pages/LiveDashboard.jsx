import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addLight } from "../features/dashboard/sidebarSlice";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Dashboard from "../components/LiveDashboard/Dashboard";
import Loading from "../components/Loading";

const LiveDashboard = () => {
    const loading = useSelector((state)=>state.appointment.generalLoading); 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(addLight("liveDashboard"));
    },[dispatch])

    
    return (
        <>
            <Sidebar/>
            <MainContent>
                <Dashboard/>
            </MainContent>
            {loading && <Loading/>}
        </>
    );
    };

export default LiveDashboard;