import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UserDropdown from "../components/UserDropdown";
import InfoCard from "../components/InfoCard";
import Table from "../components/Table";
import MainContent from "../components/MainContent";
import AppointmentsTable from "../components/AppointmentsTable";
import '../assets/dashboard.css';
import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
const Dashboard = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(addLight("dashboard"));
    },[])
    return(
        <>
            <Header>
                <UserDropdown/>
            </Header>
            <Sidebar/>
            <MainContent>
                <div className="info-card-list">
                    <InfoCard/>
                    <InfoCard/>
                    <InfoCard/>
                    <InfoCard/>
                </div>
                <div className="table-list">
                    <Table/>
                    <Table/>
                </div>
                <div className="appoint-table">
                    <AppointmentsTable/>
                </div>
            </MainContent>
        </>
    )
}

export default Dashboard;