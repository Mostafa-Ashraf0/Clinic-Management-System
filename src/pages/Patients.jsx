import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
const Patients = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("patients"));
        },[])
    return(
        <>
            <Sidebar/>
        </>
    )
}

export default Patients;