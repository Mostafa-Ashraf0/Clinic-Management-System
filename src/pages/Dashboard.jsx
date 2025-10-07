import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
const Dashboard = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(addLight("dashboard"));
    },[])
    return(
        <>
            <Sidebar/>
        </>
    )
}

export default Dashboard;