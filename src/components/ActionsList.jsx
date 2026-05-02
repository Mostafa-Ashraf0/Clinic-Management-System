import '../assets/actionsList.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEdit } from '../features/doctors/doctorsSlice';
import { setIsEditRecip } from '../features/receptionist/reciptionistSlice';
import { useEffect } from 'react';

const ActionsList = ({actionsList, role})=>{
    const dispatch = useDispatch();
    const doctorData = useSelector((state)=>state.doctor.editData);

    //handle edit click
    const handleEdit = async()=>{
        if(role === "doctor"){
            dispatch(setIsEdit(true));
        }else if(role === "receptionist"){
            dispatch(setIsEditRecip(true));
        }
    }

    useEffect(()=>{
        console.log("data", doctorData)
    },[doctorData])

    return(
    <div className="actions-list" style={actionsList?{display:"flex"}:{display:"none"}}>
        <span onClick={handleEdit}>Update</span>
        <span>Delete</span>
    </div>
    )
}

export default ActionsList;