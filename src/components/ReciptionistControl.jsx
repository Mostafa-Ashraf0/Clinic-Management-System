import { icons } from "../assets/icons";
import "../assets/reciptionistControl.css";
import { useNavigate } from "react-router-dom";
const ReciptionistControl = ()=>{
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/receptionists/addreceptionists")
    }
    return(
        <div className="control">
            <div className="info">
                <span className="title">Reciptionist</span>
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
                </div>
                <button onClick={handleClick} className="add-rec"><img src={icons.control.add} alt="add" /><span>Add Reciptionist</span></button>
            </div>
        </div>
    )
}


export default ReciptionistControl;