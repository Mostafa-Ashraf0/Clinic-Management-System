import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
const Doctors = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("doctors"));
        },[])
    return(
        <>
            <Sidebar/>
        </>
    )
}

export default Doctors;