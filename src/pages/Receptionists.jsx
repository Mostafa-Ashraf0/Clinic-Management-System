import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";
import MainContent from "../components/MainContent";
import ReciptionistControl from "../components/ReciptionistControl";
import { fetchReciptionists } from "../features/receptionist/fetchReciptionist";
import AppointmentControl from '../components/AppointmentControl';
import TablePagination from '../components/TablePagination';

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
                <AppointmentControl/>
                <Table title="Receptionists on duty" data={recipt} role="receptionist"/>
                <TablePagination/>
            </MainContent>
        </>
    )
}

export default Receptionists;