import { fetchPatients } from '../features/appointments/fetchPatients';
import { useEffect, useState } from 'react';


const AppointmentSearch = ({setFormData,formData,setSelectedPatient,selectedPatient})=>{
    const [patients, setPatients] = useState([]);
    const [searchValue, setSearchValue] = useState(null);

    const handleChange = (e)=>{
        setSearchValue(e.target.value.trim());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundPatient = patients.find((p) => p.phone === searchValue);
        if (foundPatient) {
        console.log(foundPatient)
        setSelectedPatient(foundPatient);
        setFormData((prev) => ({
            ...prev,
            patient: foundPatient.id || '',
        }));
        } else {
        setSelectedPatient(null);
        console.log("not found")
        }
    };
    useEffect(() => {
        const loadPatients = async () => {
            const data = await fetchPatients();
            setPatients(data);
        };
        loadPatients();
        }, []);
    return(
        <div className="d-flex flex-column align-items-start w-50" style={{ height: '64px' }}> 
            {/* Patient (Search by phone) */}
                <form onSubmit={handleSubmit}>
                    <label>Patient (by phone)*</label>
                    <input
                    type="text"
                    name="patient"
                    placeholder="Enter patient phone"
                    value={formData.phone}
                    onChange={handleChange}
                    />
                    <button type='submit'>submit</button>
                </form>
                {selectedPatient && (
                <div className="mt-1 text-muted">
                    <small>Found: {selectedPatient.name}</small>
                </div>
                )}
        </div>
    )
};

export default AppointmentSearch;