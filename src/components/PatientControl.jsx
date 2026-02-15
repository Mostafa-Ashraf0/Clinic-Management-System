import { useState } from "react";
import { icons } from "../assets/icons";
import "../assets/patientControl.css";
import { useNavigate } from "react-router-dom";

const PatientControl = ({data, reset, setSearch})=>{
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/patients/addpatient")
    }

    const handleChange = (e)=>{
        setSearchValue(e.target.value)
        if(e.target.value.length === 0){
            reset();
            console.log("empty")
        }
    }

    const handleSearch = async()=>{
        await reset();
        const filteredData = data.filter(d=>(d.name.trim().toLowerCase() === searchValue.trim().toLowerCase()));
        if(filteredData.length > 0){
            setSearch(filteredData);
        }else{
            alert('patient not found')
        }
    }


    return(
        <div className="control">
            <div className="info">
                <span className="title">Patients</span>
                <span className="quantity">Search with name</span>
            </div>
            <div className="operations">
                <div className="left">
                    <div className="search">
                        <input type="text" placeholder="search" onChange={handleChange} value={searchValue}/>
                        <img src={icons.control.searchIcon} alt="search" onClick={handleSearch}/>
                    </div>
                    {/*<div className="filter">
                        <label htmlFor="filter">Filter</label>
                        <div className="id-drop-down">
                            <span>ID</span>
                            <img className="role-dropdownIcon" src={icons.header.dropdown} alt="icon" />
                        </div>
                    </div>
                    <div className="gender-drop-down">
                        <span>Gender</span>
                        <img className="spe-dropdownIcon" src={icons.header.dropdown} alt="icon" />
                    </div>*/}
                </div>
                <button onClick={handleClick} className="add-patient"><img src={icons.control.add} alt="add" /><span>Add Patient</span></button>
            </div>
        </div>
    )
}


export default PatientControl;