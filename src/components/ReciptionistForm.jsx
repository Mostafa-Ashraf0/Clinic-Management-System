import {Card, Form, Button, FormGroup} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AddRecip } from '../features/receptionist/addReceptionist';
import { useSelector, useDispatch } from 'react-redux';
import { setIsEditRecip } from '../features/receptionist/reciptionistSlice';
import { editRecip } from '../features/receptionist/editReceptionist';


const ReciptionistForm = ()=>{
        const dispatch = useDispatch();
        const clinicId = useSelector((state) => state.auth.clinic_id);
        const [submited, setSubmited] = useState(false);

        //edit variables
        const editData = useSelector((state)=>state.recip.editDataRecip);
        const isEdit = useSelector((state)=>state.recip.isEditRecip);

        const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            clinic_id: clinicId,
            email: "",
            phone: "",
            sex: "",
            loginEmail: "",
            password: ""
        })


        //Edit state formData
        useEffect(() => {
        if (isEdit && editData) {
            console.log(editData)
            const [editfirstName, editlastName] = editData.name.split(" ");
            setFormData({
                firstName: editfirstName,
                lastName: editlastName,
                email: editData.email,
                phone: editData.phone,
                sex: editData.sex,
            });
        }
        }, [isEdit, editData]);
        

        //Add state formData
        useEffect(()=>{
            if(!isEdit)
            setFormData({
                firstName: "",
                lastName: "",
                clinic_id: clinicId,
                email: "",
                phone: "",
                sex: "",
                loginEmail: "",
                password: ""
            });
            setSubmited(false);
        },[submited, clinicId, isEdit])


        const handleChange = (e)=>{
            const { name, value } = e.target;
            setFormData((prev)=>({
                ...prev,
                [name]: value.trim()
            }));
        };


        const handleSubmit = (e)=>{
            if(!clinicId) return;
            e.preventDefault();
            if(isEdit && editData){
                editRecip(formData, setSubmited, editData.id)
                dispatch(setIsEditRecip(false));
            }else{
                AddRecip(formData,setSubmited);
            }
        }


    return(
        <Card style={{border:"none"}}>
            <Card.Body className='d-flex flex-column align-items-center' style={{height:"520px",padding:"30px"}}>
                <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-start' style={{gap:"20px",width:"560px",color:"#384152"}}>
                    <h4 className='m-0 p-0'>Add Receptionist</h4>
                    <Form.Group className='d-flex align-items-center justify-content-center' style={{width:"560px", gap:"10px"}}>
                        {/*First Name */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>First Name*</Form.Label>
                            <Form.Control type='text' name='firstName' value={formData.firstName} onChange={handleChange} required/>
                        </Form.Group>
                        {/*Last Name */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Last Name*</Form.Label>
                            <Form.Control type='text' name='lastName' value={formData.lastName} onChange={handleChange} required/>

                        </Form.Group>
                    </Form.Group>

                    <Form.Group className='d-flex align-items-center justify-content-center' style={{width:"560px", gap:"10px"}}>
                        {/*Email */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' name='email' value={formData.email} onChange={handleChange}/>
                        </Form.Group>
                        {/*Phone */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type='text' name='phone' value={formData.phone} onChange={handleChange}/>
                        </Form.Group>

                    </Form.Group>
                    <Form.Group className='d-flex align-items-center justify-content-between' style={{width:"560px", gap:"10px"}}>
                        {/*Gender */}
                        <Form.Group className='d-flex flex-column align-items-start w-100' style={{height:"64px"}}>
                            <Form.Label>Sex*</Form.Label>
                            <Form.Select aria-label="Default select example" name='sex' value={formData.sex} onChange={handleChange} required>
                                <option value="">Select Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Form.Select>
                        </Form.Group>
    
                    </Form.Group>
                    {/*Credentials */}
                    {!isEdit && <Form.Group className='d-flex align-items-center justify-content-center' style={{width:"560px", gap:"10px"}}>
                        {/*Login Email */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Login Email*</Form.Label>
                            <Form.Control type='text' name='loginEmail' value={formData.loginEmail} onChange={handleChange} required/>
                        </Form.Group>
                        {/*Password */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Password*</Form.Label>
                            <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} required/>
                        </Form.Group>
                    </Form.Group>}
                    <Button type='submit' className="d-flex align-items-center justify-content-center" style={{width:"97px",height:"45px",backgroundColor:"#2F9CCA",border:"none"}}>Save</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}


export default ReciptionistForm