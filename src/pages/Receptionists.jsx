import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
const Receptionists = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("receptionists"));
        },[])
    return(
        <>
            <Sidebar/>
        </>
    )
}

export default Receptionists;