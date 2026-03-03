import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addLight } from "../features/dashboard/sidebarSlice";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";


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
                <h1>livedashboard</h1>
            </MainContent>
        </>
    );
    };

export default LiveDashboard;