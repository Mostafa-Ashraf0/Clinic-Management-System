import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Table from "../components/Table";
import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
const Dashboard = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(addLight("dashboard"));
    },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <Table/>
        </>
    )
}

export default Dashboard;