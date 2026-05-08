import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect,useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import DoctorsControl from "../components/DoctorsControl";
import ControlBar from '../components/ControlBar';
import TablePagination from '../components/TablePagination';
import { fetchDoctorsData } from "../features/doctors/fetchDoctors";
import { getDoctorCount } from "../features/doctors/getDoctorsCount";
import { useSelector } from "react-redux";
import { setPaginatedData, setPaginatedLimit, setCurrentTablePage } from "../features/doctors/doctorsSlice";


const Doctors = ()=>{
    const dispatch = useDispatch();
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const [TotalDoctors, setTotalDoctors] = useState(0);

    //Table variables
    const limit = useSelector((state)=>state.doctor.paginatedLimit);
    const currentPage = useSelector((state)=>state.doctor.currentTablePage);
    const paginatedData = useSelector((state)=>state.doctor.paginatedData);

    useEffect(()=>{
        dispatch(addLight("doctors"));
        dispatch(setPaginatedLimit(10));
        dispatch(setCurrentTablePage(1));
    },[dispatch])

    useEffect(()=>{
        if (!clinicId || !limit || !currentPage) return;
        const loadAppointments = async()=>{
            if(!clinicId) return;
            const data = await fetchDoctorsData(clinicId, limit, currentPage);
            dispatch(setPaginatedData(data));
        }
        loadAppointments();
    },[clinicId, currentPage, limit, dispatch])



    useEffect(()=>{
        const loadDoctorsCount = async()=>{
            if(!clinicId) return;
            const data = await getDoctorCount(clinicId);
            if(data){
                setTotalDoctors(data);
            }
        }
        loadDoctorsCount();
    },[clinicId])


    return(
        <>
            <Sidebar/>
            <MainContent>
                <ControlBar/>
                {paginatedData && <Table title="Doctors on duty" data={paginatedData} role="doctor"/>}
                <TablePagination
                limit = {limit}
                countData = {TotalDoctors}
                table = {'doctor'}
                />
            </MainContent>
        </>
    )
}

export default Doctors;