import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";
import MainContent from "../components/MainContent";
import PatientControl from "../components/PatientControl";
import { fetchPatients } from "../features/patient/fetchPatients";
import { getPatientCount } from "../features/patient/getPatientCount";
import ControlBar from '../components/ControlBar';
import TablePagination from '../components/TablePagination';
import Loading from "../components/Loading";
import Overlay from "../components/Overlay";
import { setMobileVisible } from "../features/dashboard/sidebarSlice";
import { 
    setPaginatedData,
    setPaginatedLimit,
    setCurrentTablePage,
    setLoading
} from "../features/patient/patientSlice";

const Patients = ()=>{
    const dispatch = useDispatch();
    const { mobileVisible } = useSelector((state)=>state.sidebar);
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const [TotalDoctors, setTotalDoctors] = useState(0);
    const loading = useSelector((state)=>state.patient.loading);

    //Table variables
    const limit = useSelector((state)=>state.patient.paginatedLimit);
    const currentPage = useSelector((state)=>state.patient.currentTablePage);
    const paginatedData = useSelector((state)=>state.patient.paginatedData);

    useEffect(()=>{
        dispatch(addLight("patients"));
        dispatch(setMobileVisible(false));
        dispatch(setPaginatedLimit(10));
        dispatch(setCurrentTablePage(1));
    },[dispatch])

    useEffect(()=>{
        if (!clinicId || !limit || !currentPage) return;
        const loadAppointments = async()=>{
            if(!clinicId) return;
            dispatch(setLoading(true));
            const data = await fetchPatients(clinicId, limit, currentPage);
            if(data){
                dispatch(setPaginatedData(data));
                dispatch(setLoading(false));
            }
        }
        loadAppointments();
    },[clinicId, currentPage, limit, dispatch])



    useEffect(()=>{
        const loadDoctorsCount = async()=>{
            if(!clinicId) return;
            const data = await getPatientCount(clinicId);
            if(data){
                setTotalDoctors(data);
            }
        }
        loadDoctorsCount();
    },[clinicId])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <ControlBar/>
                <Table title="Patients" data={paginatedData} role="patient"/>
                <TablePagination
                limit = {limit}
                countData = {TotalDoctors}
                table = {'patient'}
                />
            </MainContent>
            {loading && <Loading/>}
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default Patients;