import '../assets/actionsList.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEdit } from '../features/doctors/doctorsSlice';
import { useEffect } from 'react';

const ActionsList = ({actionsList})=>{
    const dispatch = useDispatch();
    const doctorData = useSelector((state)=>state.doctor.editData);

    //handle edit click
    const handleEdit = async()=>{
        dispatch(setIsEdit(true));
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