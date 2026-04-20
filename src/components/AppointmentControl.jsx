import { icons } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import style from '../assets/appointmentControl.module.css'
const AppointmentControl = ()=>{
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/appointments/addAppointment');
    }
    return(
        <div className={style.control}>
            <div className={style.operations}>
                <div className={style.left}>
                    
                    <div className={style.filter}>
                        <label htmlFor="filter">Filter</label>
                        <div className={style.roleDropDown}>
                            <span>Status</span>
                            <img className={style.roleDropdownIcon} src={icons.header.dropdown} alt="icon" />
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.search}>
                        <input type="text" placeholder="search"/>
                        <img src={icons.control.searchIcon} alt="search" />
                    </div>
                <span className={style.addAppointment} onClick={handleClick}><img src={icons.control.add} alt="add" /><span>Create</span></span> 
                </div>
            </div>
        </div>
    )
}


export default AppointmentControl;