import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";
import MainContent from "../components/MainContent";
import ReciptionistControl from "../components/ReciptionistControl";
import ControlBar from '../components/ControlBar';
import TablePagination from '../components/TablePagination';
import { fetchReceptionist } from "../features/receptionist/fetchReciptionist";
import { getRecepCount } from "../features/receptionist/getRecepCount";
import Loading from "../components/Loading";
import Overlay from "../components/Overlay";
import { setMobileVisible } from "../features/dashboard/sidebarSlice";
import { 
    setPaginatedData,
    setPaginatedLimit,
    setCurrentTablePage,
    setLoading
} from "../features/receptionist/reciptionistSlice";

const Receptionists = ()=>{
    const dispatch = useDispatch();
    const { mobileVisible } = useSelector((state)=>state.sidebar);
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const [totalRecip, setTotalRecep] = useState(0);
    const loading = useSelector((state)=>state.recip.loading);

    //Table variables
    const limit = useSelector((state)=>state.recip.paginatedLimit);
    const currentPage = useSelector((state)=>state.recip.currentTablePage);
    const paginatedData = useSelector((state)=>state.recip.paginatedData);

    useEffect(()=>{
        dispatch(addLight("receptionists"));
        dispatch(setMobileVisible(false));
        dispatch(setPaginatedLimit(10));
        dispatch(setCurrentTablePage(1));
    },[dispatch])

    useEffect(()=>{
        if (!clinicId || !limit || !currentPage) return;
        const loadAppointments = async()=>{
            if(!clinicId) return;
            dispatch(setLoading(true));
            const data = await fetchReceptionist(clinicId, limit, currentPage);
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
            const data = await getRecepCount(clinicId);
            if(data){
                setTotalRecep(data);
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
                <Table title="Receptionists on duty" data={paginatedData} role="receptionist"/>
                <TablePagination
                limit = {limit}
                countData = {totalRecip}
                table = {'receptionist'}
                />
            </MainContent>
            {loading && <Loading/>}
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default Receptionists;