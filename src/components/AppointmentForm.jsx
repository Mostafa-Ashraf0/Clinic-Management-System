import {Card, Form, Button, FormGroup} from 'react-bootstrap';
//import add appointment.js from features
import { useEffect, useState } from 'react';
const AppointmentForm = ()=>{
    const [submited, setSubmited] = useState(false);
    const [formData, setFormData] = useState({
        doctor: "",
        patient: "",
        date: "",
        time: "",
    })
    useEffect(()=>{
        setFormData({
            doctor: "",
            patient: "",
            date: "",
            time: "",
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
        //add appointment()
    }
    return(
        <Card>
            <Card.Body className='d-flex flex-column align-items-center' style={{height:"520px",padding:"30px"}}>
                <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-start' style={{gap:"20px",width:"560px",color:"#384152"}}>
                    <h4 className='m-0 p-0'>Create Appointment</h4>
                    <Form.Group className='d-flex align-items-center justify-content-center' style={{width:"560px", gap:"10px"}}>
                        {/*Doctor */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Doctor*</Form.Label>
                            <Form.Select value={formData.doctor} name='doctor' onChange={handleChange} required>
                                <option>Select Doctor</option>
                                <option value="mostafa">mostafa</option>
                            </Form.Select>
                        </Form.Group>
                        {/*Patient */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Last Name*</Form.Label>
                            <Form.Control type='text' name='lastName' value={formData.lastName} onChange={handleChange} required/>

                        </Form.Group>
                    </Form.Group>

                    <Form.Group className='d-flex align-items-center justify-content-center' style={{width:"560px", gap:"10px"}}>
                        {/*date */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' name='email' value={formData.email} onChange={handleChange}/>
                        </Form.Group>
                        {/*time */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type='text' name='phone' value={formData.phone} onChange={handleChange}/>
                        </Form.Group>

                    </Form.Group>
                    <Button type='submit' className="d-flex align-items-center justify-content-center" style={{width:"97px",height:"45px",backgroundColor:"#2F9CCA",border:"none"}}>Save</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}


export default AppointmentForm;