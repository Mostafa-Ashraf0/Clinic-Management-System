import '../assets/Sidebar.css';
import logo from '../assets/medical-logo-design.jpeg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { icons } from '../assets/icons';
const Sidebar = ()=>{
    const { page } = useSelector((state)=>state.sidebar);
    return(
        <div className="sidebar h-100 d-flex flex-column align-items-center">
            <div className="title w-100 d-flex align-items-center">
                <div className="left d-flex align-items-center">
                    <img src={logo} alt="logo" />
                </div>
                <div className="right d-flex align-items-center">
                    <span>Clinic Care Group</span>
                </div>
            </div>
            <ul className='links d-flex flex-column align-items-center'>
                <li className={page==="liveDashboard"?"light":"dark"}>
                    <Link to={"/liveDashboard"}>
                        <img src={page==="liveDashboard"?icons.live.dark:icons.live.dark} alt="dash-icon"/>
                        <span>Live Dashboard</span>
                    </Link>
                </li>
                <li className={page==="dashboard"?"light":"dark"}>
                    <Link to={"/dashboard"}>
                        <img src={page==="dashboard"?icons.dashboard.dark:icons.dashboard.dark} alt="dash-icon"/>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className={page==="doctors"?"light":"dark"}>
                    <Link to={"/doctors"}>
                        <img src={page==="doctors"?icons.doctor.dark:icons.doctor.dark} alt="doc-icon" />
                        <span>Doctors</span>
                    </Link>
                </li>
                <li className={page==="receptionists"?"light":"dark"}>
                    <Link to={"/receptionists"}>
                        <img src={page==="receptionists"?icons.nurse.dark:icons.nurse.dark} alt="rec-icon" />
                        <span>Receptionists</span>
                    </Link>
                </li>
                <li className={page==="patients"?"light":"dark"}>
                    <Link to={"/patients"}>
                        <img src={page==="patients"?icons.patients.dark:icons.patients.dark} alt="pat-icon" />
                        <span>Patients</span>
                    </Link>
                </li>
                <li className={page==="appointments"?"light":"dark"}>
                    <Link to={"/appointments"}>
                        <img src={page==="appointments"?icons.appointments.dark:icons.appointments.dark} alt="app-icon" />
                        <span>Appointments</span>
                    </Link>
                </li>
                <li className={page==="medicalTests"?"light":"dark"}>
                    <Link to={"/medicalTests"}>
                        <img src={page==="medicalTests"?icons.medicalTests.dark:icons.medicalTests.dark} alt="app-icon" />
                        <span>Medical Tests</span>
                    </Link>
                </li>
                <li className={page==="operations"?"light":"dark"}>
                    <Link to={"/operations"}>
                        <img src={page==="operations"?icons.operations.dark:icons.operations.dark} alt="app-icon" />
                        <span>Medical Operations</span>
                    </Link>
                </li>
                <li className={page==="settings"?"light":"dark"}>
                    <Link to={"/settings"}>
                        <img src={page==="settings"?icons.settings.dark:icons.settings.dark} alt="app-icon" />
                        <span>Settings</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
};


export default Sidebar;