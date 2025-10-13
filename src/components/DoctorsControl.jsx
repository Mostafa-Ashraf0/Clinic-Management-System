import { icons } from "../assets/icons";
import '../assets/doctorsControl.css';

const DoctorsControl = ()=>{
    return(
        <div className="control">
            <div className="info">
                <span className="title">Doctors</span>
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
                            <span>Role</span>
                            <img className="role-dropdownIcon" src={icons.header.dropdown} alt="icon" />
                        </div>
                    </div>
                    <div className="speciality-drop-down">
                        <span>speciality</span>
                        <img className="spe-dropdownIcon" src={icons.header.dropdown} alt="icon" />
                    </div>
                </div>
                <button className="add-doctor"><img src={icons.control.add} alt="add" /><span>Add Doctor</span></button>
            </div>
        </div>
    )
}


export default DoctorsControl;