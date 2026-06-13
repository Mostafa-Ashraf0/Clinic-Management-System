import { icons } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import style from '../assets/appointmentControl.module.css';
import { useLocation } from "react-router-dom";
import SearchBox from "./general/tables/SearchBox";

const ControlBar = ()=>{
    const location = useLocation();
    const navigate = useNavigate();


    const handleClick = ()=>{
        if(location.pathname === "/doctors") navigate('/doctors/addDoctor');
        else if(location.pathname === "/receptionists") navigate('/receptionists/addreceptionists');
        else if(location.pathname === "/patients") navigate('/patients/addpatient');
        else if(location.pathname === "/appointments") navigate('/appointments/addAppointment');
        
    }
    return(
        <div className={style.control}>
            <div className={style.operations}>
                <div className={style.left}>
                    
                    <div className={style.filter}>
                        <label htmlFor="filter">Filter</label>
                        <div className={style.roleDropDown}>
                            <img className={style.roleDropdownIcon} src={icons.control.filter} alt="icon" />
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <SearchBox/>
                <span className={style.addAppointment} onClick={handleClick}><img src={icons.control.add} alt="add" /><span>Create</span></span> 
                </div>
            </div>
        </div>
    )
}


export default ControlBar;