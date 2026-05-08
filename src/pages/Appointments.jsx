import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import ControlBar from "../components/ControlBar";
import AppointmentsTable from "../components/AppointmentsTable";
import TablePagination from "../components/TablePagination";
import AddAppointmentView from "../components/LiveDashboard/AddAppointmentView";
import { getAppointmentCount } from "../features/appointments/getAppointmentsCount";
import Loading from "../components/Loading";
import { setPaginatedLimit, setCurrentTablePage } from "../features/appointments/appointmentSlice";

const Appointments = ()=>{
    const [totalData, setTotalData] = useState(null);
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const loading = useSelector((state)=>state.appointment.generalLoading);
    const limit = useSelector((state)=>state.appointment.paginatedLimit);
    const liveFormVisible = useSelector((state)=>state.fullView.liveFormVisible);

    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("appointments"));
            dispatch(setPaginatedLimit(10));
            dispatch(setCurrentTablePage(1));
        },[dispatch])

        useEffect(()=>{
        const loadAppointments = async()=>{
            if(!clinicId) return;
            const data = await getAppointmentCount(clinicId);
            if(data){
                setTotalData(data);
            }
        }
        loadAppointments();
    },[clinicId])

    return(
        <div>
            <Sidebar/>
            <MainContent>
                <ControlBar/>
                <AppointmentsTable/>
                <TablePagination
                limit = {limit}
                countData = {totalData}
                table = {'appointment'}
                />
            </MainContent>
            {liveFormVisible && <AddAppointmentView/>}
            {loading && <Loading/>}
        </div>
    )
}

export default Appointments;