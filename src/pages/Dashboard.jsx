import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
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
        </>
    )
}

export default Dashboard;