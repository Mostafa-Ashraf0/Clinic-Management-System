import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";
import MainContent from "../components/MainContent";
import ReciptionistControl from "../components/ReciptionistControl";
import { fetchReciptionists } from "../features/receptionist/fetchReciptionist";
const Receptionists = ()=>{
    const [recipt,setRecipt] = useState([]);
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("receptionists"));
            const loadRecip = async()=>{
            const data = await fetchReciptionists();
            setRecipt(data);
        }
        loadRecip();
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <ReciptionistControl/>
                <Table title="Receptionists on duty" data={recipt} role="receptionist"/>
            </MainContent>
        </>
    )
}

export default Receptionists;