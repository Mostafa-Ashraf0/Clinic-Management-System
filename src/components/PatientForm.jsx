import {Card, Form, Button, FormGroup} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AddPatient } from '../features/patient/patinet';
import { useDispatch, useSelector } from 'react-redux';
import { editPatient } from '../features/patient/editPatient';
import { setIsEditPatient } from '../features/patient/patientSlice';

const PatientForm = ()=>{
            const clinicId = useSelector((state) => state.auth.clinic_id);
            const [submited, setSubmited] = useState(false);
            const dispatch = useDispatch();
            

            //edit variables
            const editData = useSelector((state)=>state.patient.editDataPatient);
            const isEdit = useSelector((state)=>state.patient.isEditPatient);

            const [formData, setFormData] = useState({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                sex: "",
                clinic_id: clinicId
            })


            //Edit state formData
            useEffect(() => {
            if (isEdit && editData) {
                const [editfirstName, editlastName] = editData.name.split(" ");
                setFormData({
                    firstName: editfirstName,
                    lastName: editlastName,
                    email: editData.email,
                    phone: editData.phone,
                    sex: editData.gender,
                });
            }
            }, [isEdit, editData]);


            useEffect(()=>{
                if(!isEdit)
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    sex: "",
                    clinic_id: clinicId
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
                    editPatient(formData, setSubmited, editData.id);
                    dispatch(setIsEditPatient(false));
                }else{
                    AddPatient(formData,setSubmited);
                }
            }

    return(
        <Card style={{border:'none',width:"100%"}}>
            <Card.Body className='d-flex flex-column align-items-center' style={{height:"450px",padding:"30px"}}>
                <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-start w-100' style={{gap:"20px",color:"#384152"}}>
                    <h4 className='m-0 p-0'>Add Patient</h4>
                    <Form.Group className='d-flex align-items-center justify-content-center w-100' style={{gap:"10px"}}>
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

                    <Form.Group className='d-flex align-items-center justify-content-center w-100' style={{gap:"10px"}}>
                        {/*Email */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' name='email' value={formData.email} onChange={handleChange}/>
                        </Form.Group>
                        {/*Phone */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type='text' name='phone' value={formData.phone} onChange={handleChange} required/>
                        </Form.Group>

                    </Form.Group>
                    <Form.Group className='d-flex align-items-center justify-content-center w-100' style={{gap:"10px"}}>
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
                    <Button type='submit' className="d-flex align-items-center justify-content-center" style={{width:"97px",height:"45px",backgroundColor:"#2F9CCA",border:"none"}}>Save</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}


export default PatientForm