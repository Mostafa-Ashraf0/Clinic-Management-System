import '../assets/actionsList.css';
import { useDispatch } from 'react-redux';
import { setIsEdit } from '../features/doctors/doctorsSlice';
import { setIsEditRecip } from '../features/receptionist/reciptionistSlice';
import { setIsEditPatient } from '../features/patient/patientSlice';


const ActionsList = ({actionsList, role})=>{
    const dispatch = useDispatch();

    //handle edit click
    const handleEdit = async()=>{
        if(role === "doctor"){
            dispatch(setIsEdit(true));
        }else if(role === "receptionist"){
            dispatch(setIsEditRecip(true));
        }else if(role === "patient"){
            dispatch(setIsEditPatient(true));
        }
    }

    


    return(
    <div className="actions-list" style={actionsList?{display:"flex"}:{display:"none"}}>
        <span onClick={handleEdit}>Update</span>
        <span>Delete</span>
    </div>
    )
}

export default ActionsList;