import {Card, Form, Button, FormGroup} from 'react-bootstrap';
import { AddDoctor } from '../features/doctors/addNewDoctor';
import { useEffect, useState } from 'react';
import { getSepcialization } from '../features/doctors/getSpecialization';
import { getClinic } from '../features/getClinic';
const DoctorForm = ()=>{
    const [spec, setSpec] = useState([]);
    const [clinic, setClinic] = useState([]);
    const [submited, setSubmited] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        clinic_id:"",
        email: "",
        phone: "",
        sex: "",
        speciality_id: "",
        loginEmail: "",
        password: ""
    })
    useEffect(()=>{
        setFormData({
            firstName: "",
            lastName: "",
            clinic_id:"",
            email: "",
            phone: "",
            sex: "",
            speciality_id: "",
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
        AddDoctor(formData,setSubmited);
    }
    useEffect(()=>{
        const displaySpec_Clinic = async()=>{
            const specData = await getSepcialization();
            setSpec(specData);
            const clinicData = await getClinic();
            setClinic(clinicData);
        }
        displaySpec_Clinic();
    },[])
    return(
        <Card>
            <Card.Body className='d-flex flex-column align-items-center' style={{height:"520px",padding:"30px"}}>
                <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-start' style={{gap:"20px",width:"560px",color:"#384152"}}>
                    <h4 className='m-0 p-0'>Add Doctor</h4>
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
                        <Form.Group className='d-flex flex-column align-items-start w-33' style={{height:"64px"}}>
                            <Form.Label>Sex*</Form.Label>
                            <Form.Select aria-label="Default select example" name='sex' value={formData.gender} onChange={handleChange} required>
                                <option value="">Select an option</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Form.Select>
                        </Form.Group>
                        {/*Speciality */}
                        <Form.Group className='d-flex flex-column align-items-start w-33' style={{height:"64px"}}>
                            <Form.Label>Speciality*</Form.Label>
                            <Form.Select aria-label="Default select example" name='speciality_id' value={formData.speciality} onChange={handleChange} required>
                                <option value="">Select a specialization</option>
                                {spec.map(s=><option value={s.id} key={s.id}>{s.name}</option>)}
                            </Form.Select>
                        </Form.Group>
                        {/*Speciality */}
                        <Form.Group className='d-flex flex-column align-items-start w-33' style={{height:"64px"}}>
                            <Form.Label>Clinic*</Form.Label>
                            <Form.Select aria-label="Default select example" name='clinic_id' value={formData.clinic_id} onChange={handleChange} required>
                                <option value="">Select an option</option>
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


export default DoctorForm