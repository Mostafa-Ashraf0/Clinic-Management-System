import { fetchPatients } from '../features/appointments/fetchPatients';
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import SearchResults from './SearchResults';
import { useSelector,useDispatch } from 'react-redux';
import { setDropdown } from '../features/appointments/appointmentSlice';
import { icons } from "../assets/icons";

const AppointmentSearch = ({setFormData,setSelectedPatient,selectedPatient,phone,setPhone,finalPatient,setFinalPatient})=>{
    const dispatch = useDispatch();
    const { dropdownViewd } = useSelector((state)=>state.appointment);
    const [patients, setPatients] = useState([]);
    

    const handleChange = (e)=>{
        const value = e.target.value.trim();
        console.log(value);
        {(value.length === 0)?dispatch(setDropdown(false)):dispatch(setDropdown(true))}
        setPhone(value);
        const foundPatient = patients.filter((p) => p.phone.startsWith(value));
        if (foundPatient.length>0) {
        console.log(foundPatient>0)
        setSelectedPatient(foundPatient);
        } else {
        console.log("not found")
        }
    }


    useEffect(() => {
        const loadPatients = async () => {
            const data = await fetchPatients();
            setPatients(data);
        };
        loadPatients();
        }, []);
    return(
        <div className="d-flex flex-column align-items-start w-50 position-relative"> 
            {/* Patient (Search by phone) */}
                <Form className="d-flex flex-column align-items-start"
                        style={{ width: '560px', color: '#384152' }}>
                    <Form.Group className="d-flex align-items-center"
                                style={{ width: '560px', gap: '10px',marginBottom:"20px" }}>
                        <Form.Group className="d-flex flex-column align-items-start w-50" style={{ height: '64px' }}>
                            <Form.Label>Patient (by phone)*</Form.Label>
                            <Form.Group className='d-flex align-items-center w-100'>
                                <Form.Control
                                type="text"
                                name="patient"
                                placeholder="Enter patient phone"
                                value={phone}
                                onChange={handleChange}
                                autoComplete="off"
                                />
                                <img src={icons.control.searchIcon} alt="search" style={{marginLeft:"-30px"}}/>
                            </Form.Group>
                        </Form.Group>
                        <Form.Group className={`d-flex flex-column align-items-start w-50`} style={{ height: '64px'}}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' value={finalPatient.name || ''} readOnly/>
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="d-flex align-items-center"
                                style={{ width: '560px', gap: '10px',marginBottom:"20px" }}>
                        <Form.Group className={`d-flex flex-column align-items-start w-50`} style={{ height: '64px' }}>
                            <Form.Label>Age</Form.Label>
                            <Form.Control type='text' value={finalPatient.age || ''} readOnly/>
                        </Form.Group>
                        <Form.Group className={`d-flex flex-column align-items-start w-50`} style={{ height: '64px' }}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' value={finalPatient.email || ''} readOnly/>
                        </Form.Group>
                    </Form.Group>
                </Form>

                {selectedPatient.length>0 && dropdownViewd?<SearchResults
                 selectedPatients={selectedPatient}
                 setFormData={setFormData}
                 setPhone={setPhone}
                 setFinalPatient={setFinalPatient}
                 />:""}
        </div>
    )
};

export default AppointmentSearch;