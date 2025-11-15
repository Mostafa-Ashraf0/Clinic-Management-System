import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect,useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import DoctorsControl from "../components/DoctorsControl";
import { fetchDoctors } from "../features/appointments/fetchDoctors";
const Doctors = ()=>{
    const [doctors, setDoctors] = useState([]);
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("doctors"));
        const loadDoctors = async()=>{
            const data = await fetchDoctors();
            setDoctors(data);
        }
        loadDoctors();
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <DoctorsControl/>
                <Table title="Doctors on duty" data={doctors} role="doctor"/>
            </MainContent>
        </>
    )
}

export default Doctors;