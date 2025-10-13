import { icons } from "../assets/icons";
import "../assets/patientControl.css";
const PatientControl = ()=>{
    return(
        <div className="control">
            <div className="info">
                <span className="title">Patients</span>
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
                        <div className="id-drop-down">
                            <span>ID</span>
                            <img className="role-dropdownIcon" src={icons.header.dropdown} alt="icon" />
                        </div>
                    </div>
                    <div className="gender-drop-down">
                        <span>Gender</span>
                        <img className="spe-dropdownIcon" src={icons.header.dropdown} alt="icon" />
                    </div>
                </div>
                <button className="add-patient"><img src={icons.control.add} alt="add" /><span>Add Patient</span></button>
            </div>
        </div>
    )
}


export default PatientControl;