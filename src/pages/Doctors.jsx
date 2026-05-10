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
import Loading from "../components/Loading";
import Overlay from "../components/Overlay";
import { useSelector } from "react-redux";
import { setMobileVisible } from "../features/dashboard/sidebarSlice";
import { 
    setPaginatedData,
    setPaginatedLimit,
    setCurrentTablePage,
    setLoading
} from "../features/doctors/doctorsSlice";


const Doctors = ()=>{
    const dispatch = useDispatch();
    const { mobileVisible } = useSelector((state)=>state.sidebar);
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const [TotalDoctors, setTotalDoctors] = useState(0);
    const loading = useSelector((state)=>state.doctor.loading);

    //Table variables
    const limit = useSelector((state)=>state.doctor.paginatedLimit);
    const currentPage = useSelector((state)=>state.doctor.currentTablePage);
    const paginatedData = useSelector((state)=>state.doctor.paginatedData);

    useEffect(()=>{
        dispatch(addLight("doctors"));
        dispatch(setMobileVisible(false));
        dispatch(setPaginatedLimit(10));
        dispatch(setCurrentTablePage(1));
    },[dispatch])

    useEffect(()=>{
        if (!clinicId || !limit || !currentPage) return;
        const loadingDoctors = async()=>{
            if(!clinicId) return;
            dispatch(setLoading(true));
            const data = await fetchDoctorsData(clinicId, limit, currentPage);
            if(data){
                dispatch(setPaginatedData(data));
                dispatch(setLoading(false));
            }
        }
        loadingDoctors();
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
            <Header/>
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
            {loading && <Loading/>}
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default Doctors;