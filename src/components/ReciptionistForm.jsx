import {Card, Form, Button, FormGroup} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AddRecip } from '../features/receptionist/addReceptionist';
import { getClinic } from '../features/getClinic';
const ReciptionistForm = ()=>{
        const [clinic, setClinic] = useState([]);
        const [submited, setSubmited] = useState(false);
        const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            clinic_id: "",
            email: "",
            phone: "",
            sex: "",
            loginEmail: "",
            password: ""
        })
        useEffect(()=>{
            setFormData({
                firstName: "",
                lastName: "",
                clinic_id: "",
                email: "",
                phone: "",
                sex: "",
                loginEmail: "",
                password: ""
            });
            setSubmited(false);
        },[submited])
        const handleChange = (e)=>{
            const { name, value } = e.target;
            setFormData((prev)=>({
                ...prev,
                [name]: value.trim()
            }));
        };
        const handleSubmit = (e)=>{
            e.preventDefault();
            AddRecip(formData,setSubmited);
        }
        useEffect(()=>{
            const displayClinic = async()=>{
                const clinicData = await getClinic();
                setClinic(clinicData);
            };
            displayClinic();
        },[])
    return(
        <Card>
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
                        {/*Gender */}
                        <Form.Group className='d-flex flex-column align-items-start w-100' style={{height:"64px"}}>
                            <Form.Label>Clinic*</Form.Label>
                            <Form.Select aria-label="Default select example" name='clinic_id' value={formData.clinic_id} onChange={handleChange} required>
                                <option value="">Select Clinic</option>
                                {clinic.map(c=><option value={c.id} key={c.id}>{c.name}</option>)}
                            </Form.Select>
                        </Form.Group>
    
                    </Form.Group>
                        {/*Credentials */}
                    <Form.Group className='d-flex align-items-center justify-content-center' style={{width:"560px", gap:"10px"}}>
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

                    </Form.Group>

                    <Button type='submit' className="d-flex align-items-center justify-content-center" style={{width:"97px",height:"45px",backgroundColor:"#2F9CCA",border:"none"}}>Save</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}


export default ReciptionistForm