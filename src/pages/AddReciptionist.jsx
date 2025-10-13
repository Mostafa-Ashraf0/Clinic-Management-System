import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import ReciptionistForm from "../components/ReciptionistForm";
const AddReciptionist = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("doctors"));
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <ReciptionistForm/>
            </MainContent>
        </>
    )
}

export default AddReciptionist;