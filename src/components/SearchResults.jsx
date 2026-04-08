import '../assets/searchDropdown.css';
import { useSelector,useDispatch } from 'react-redux';
import { setDropdown } from '../features/appointments/appointmentSlice';
import { setFinalPatient, setPhone } from '../features/appointments/patientSearchSlice';

const SearchResults = ({setFormData})=>{
    const dispatch = useDispatch();
    const {selectedPatient} = useSelector((state)=> state.patientSearch)
    const { dropdownViewd } = useSelector((state)=>state.appointment);
    const handleClick = (p)=>{
        dispatch(setFinalPatient({
            name:p.name || '',
            phone:p.phone || '',
            email:p.email || ''
        }));
        dispatch(setPhone(p.phone || ''));
        setFormData((prev) => ({
            ...prev,
            patient: p.id || '',
        }));
        dispatch(setDropdown(false));
    }
    return(
        <div className="search-drop-down" style={dropdownViewd?{display:"flex"}:{display:"none"}}>
            {selectedPatient.map(p=>(
                <span key={p.id} onClick={()=>handleClick(p)}>{p.phone}</span>
            ))}
        </div>
    )
};

export default SearchResults;