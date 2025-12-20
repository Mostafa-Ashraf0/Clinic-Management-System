import { icons } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import '../assets/appointmentControl.css';
const AppointmentControl = ()=>{
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/appointments/addAppointment');
    }
    return(
        <div className="control">
            <div className="info">
                <span className="title">Appointments</span>
                <span className="quantity">Show 4 of 4</span>
            </div>
            <div className="operations">
                <div className="left">
                    <div className="search">
                        <input type="text" placeholder="search"/>
                        <img src={icons.control.searchIcon} alt="search" />
                    </div>
                    <div className="filter">
                        <label htmlFor="filter">Filter</label>
                        <div className="role-drop-down">
                            <span>Status</span>
                            <img className="role-dropdownIcon" src={icons.header.dropdown} alt="icon" />
                        </div>
                    </div>
                    <div className="speciality-drop-down">
                        <span>Clinic</span>
                        <img className="spe-dropdownIcon" src={icons.header.dropdown} alt="icon" />
                    </div>
                </div>
                <button className="add-appointment" onClick={handleClick}><img src={icons.control.add} alt="add" /><span>Create Appointment</span></button>
            </div>
        </div>
    )
}


export default AppointmentControl;