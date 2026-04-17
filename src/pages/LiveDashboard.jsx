import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addLight } from "../features/dashboard/sidebarSlice";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Dashboard from "../components/LiveDashboard/Dashboard";


const LiveDashboard = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(addLight("liveDashboard"));
    },[])

    
    return (
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <Dashboard/>
            </MainContent>
        </>
    );
    };

export default LiveDashboard;