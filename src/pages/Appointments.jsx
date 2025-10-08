import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
const Appointments = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("appointments"));
        },[])
    return(
        <>
            <Sidebar/>
        </>
    )
}

export default Appointments;