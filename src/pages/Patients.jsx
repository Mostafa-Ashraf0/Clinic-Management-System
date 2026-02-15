import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";
import MainContent from "../components/MainContent";
import PatientControl from "../components/PatientControl";
import { fetchPatients } from "../features/appointments/fetchPatients";
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
            <Header/>
            <Sidebar/>
            <MainContent>
                <PatientControl
                setSearch = {setPatients}
                reset = {loadPatients}
                data = {patients}
                />
                <Table title="Patients" data={patients} role="patient"/>
            </MainContent>
        </>
    )
}

export default Patients;