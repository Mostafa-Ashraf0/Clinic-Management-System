import '../assets/searchDropdown.css';
import { useSelector,useDispatch } from 'react-redux';
import { setDropdown } from '../features/appointments/appointmentSlice';

const SearchResults = ({selectedPatients,setFormData,setPhone,setFinalPatient})=>{
    const dispatch = useDispatch();
    const { dropdownViewd } = useSelector((state)=>state.appointment);
    const handleClick = (p)=>{
        setFinalPatient({
            name:p.name || '',
            phone:p.phone || '',
            email:p.email || ''
        });
        setPhone(p.phone || '');
        setFormData((prev) => ({
            ...prev,
            patient: p.id || '',
        }));
        dispatch(setDropdown(false));
    }
    return(
        <div className="search-drop-down" style={dropdownViewd?{display:"flex"}:{display:"none"}}>
            {selectedPatients.map(p=>(
                <span key={p.id} onClick={()=>handleClick(p)}>{p.phone}</span>
            ))}
        </div>
    )
};

export default SearchResults;