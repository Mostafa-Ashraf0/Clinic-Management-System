import { fetchPatients } from '../features/appointments/fetchPatients';
import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import SearchResults from './SearchResults';
import { useSelector,useDispatch } from 'react-redux';
import { setDropdown } from '../features/appointments/appointmentSlice';
import { icons } from "../assets/icons";
import { setSelectedPatient, setPhone } from '../features/appointments/patientSearchSlice';

const AppointmentSearch = ({setFormData})=>{
    const dispatch = useDispatch();
    const { dropdownViewd } = useSelector((state)=>state.appointment);
    //const [patients, setPatients] = useState([]);
    const {phone,finalPatient} = useSelector((state)=>state.patientSearch);


    const handleChange = (e)=>{
        const value = e.target.value;
        dispatch(setPhone(value));

        if (value.length >= 4) {
            dispatch(setDropdown(true));
        } else {
            dispatch(setDropdown(false));
            dispatch(setSelectedPatient([]));
        }
    }


    useEffect(() => {
        if (phone.length < 4) return;

        const timeout = setTimeout(async () => {
            let limit = 10;
            if (phone.length >= 6) limit = 50;
            if (phone.length === 11) limit = 1;

            const data = await fetchPatients(limit, phone);
            dispatch(setSelectedPatient(data));
        }, 400);

        return () => clearTimeout(timeout);
    }, [phone,dispatch]);


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

                {dropdownViewd?<SearchResults
                 setFormData={setFormData}
                 />:""}
        </div>
    )
};

export default AppointmentSearch;