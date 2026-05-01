import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import ControlBar from "../components/ControlBar";
import AppointmentsTable from "../components/AppointmentsTable";
import TablePagination from "../components/TablePagination";
import AddAppointmentView from "../components/LiveDashboard/AddAppointmentView";

const Appointments = ()=>{
    const liveFormVisible = useSelector((state)=>state.fullView.liveFormVisible);
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("appointments"));
        },[])
    return(
        <div>
            <Sidebar/>
            <MainContent>
                <ControlBar/>
                <AppointmentsTable/>
                <TablePagination/>
            </MainContent>
            {liveFormVisible && <AddAppointmentView/>}
        </div>
    )
}

export default Appointments;