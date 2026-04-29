import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";
import MainContent from "../components/MainContent";
import PatientControl from "../components/PatientControl";
import { fetchPatients } from "../features/patient/fetchPatients";
import ControlBar from '../components/ControlBar';
import TablePagination from '../components/TablePagination';

const Patients = ()=>{
    const [patients, setPatients] = useState([]);
    const loadPatients = async()=>{
            const data = await fetchPatients();
            setPatients(data);
            }
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("patients"));
        loadPatients();
        },[])
    return(
        <>
            <Sidebar/>
            <MainContent>
                <ControlBar/>
                <Table title="Patients" data={patients} role="patient"/>
                <TablePagination/>
            </MainContent>
        </>
    )
}

export default Patients;