import { fetchPatientsSearch } from '../features/appointments/fetchPatientsSearch';
import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import SearchResults from './SearchResults';
import { useSelector,useDispatch } from 'react-redux';
import { setDropdown } from '../features/appointments/appointmentSlice';
import { icons } from "../assets/icons";
import { setSelectedPatient, setPhone, setFinalPatient } from '../features/appointments/patientSearchSlice';

const AppointmentSearch = ({setFormData,setError,error})=>{
    const dispatch = useDispatch();
    const { dropdownViewd } = useSelector((state)=>state.appointment);
    const {phone,finalPatient} = useSelector((state)=>state.patientSearch);

    //edit case
    const isEdit = useSelector((state)=>state.appointment.isEdit);
    const editData = useSelector((state)=>state.appointment.editAppointmentData);
    
    useEffect(() => {
        if (isEdit && editData) {
            dispatch(setPhone(editData.patient.phone));
            dispatch(setFinalPatient(editData.patient));
        }
    }, [isEdit, editData, dispatch]);
    
    useEffect(()=>{
        dispatch(setPhone(""));
        dispatch(setDropdown(false));
    },[dispatch])

    const handleChange = (e)=>{
        const value = e.target.value;
        dispatch(setPhone(value));

        if (value.length>1 && !/^01\d{0,9}$/.test(value)) {
            setError("number may not start with 01 or contain chars");
        }else if(value.length === 0){
            setError("empty number");
        }
         else {
            setError("");
        }

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

            const data = await fetchPatientsSearch(limit, phone);
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
                                minLength={11}
                                maxLength={11}
                                placeholder="Enter patient phone"
                                value={phone}
                                onChange={handleChange}
                                autoComplete="off"
                                required
                                />
                                <img src={icons.control.searchIcon} alt="search" style={{marginLeft:"-30px"}}/>
                            </Form.Group>
                            <span style={{
                                fontSize:"10px",
                                minHeight: "20px",
                                display: "block",
                                color:"red",
                                zIndex:"4000"
                                }}>{error}</span>
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