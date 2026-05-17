import {Card, Form, Button, FormGroup} from 'react-bootstrap';
import { AddDoctor } from '../features/doctors/addNewDoctor';
import { useEffect, useState } from 'react';
import { getSepcialization } from '../features/doctors/getSpecialization';
import { useSelector, useDispatch } from 'react-redux';
import { editDoctor } from '../features/doctors/editDoctor';
import { setIsEdit, setLoading } from '../features/doctors/doctorsSlice';

const DoctorForm = ()=>{
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const [spec, setSpec] = useState([]);
    const [submited, setSubmited] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector((state)=> state.doctor.loading);

    //edit variables
    const editData = useSelector((state)=>state.doctor.editData);
    const isEdit = useSelector((state)=>state.doctor.isEdit);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        clinic_id: clinicId,
        email: "",
        phone: "",
        sex: "",
        speciality_id: "",
        loginEmail: "",
        password: ""
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
            sex: editData.sex,
            speciality_id: editData.doctor_extra.specialization_id
        });
    }
    }, [isEdit, editData]);



    useEffect(()=>{
        if(!isEdit)
        setFormData({
            firstName: "",
            lastName: "",
            clinic_id: clinicId,
            email: "",
            phone: "",
            sex: "",
            speciality_id: "",
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
        console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!clinicId) return;

        try {
            dispatch(setLoading(true));

            if (isEdit && editData) {
                await editDoctor(formData, setSubmited, editData.id);
                dispatch(setIsEdit(false));
            } else {
                await AddDoctor(formData, setSubmited);
            }

        } catch (error) {
            console.error(error);
            alert("Something went wrong");

        } finally {
            dispatch(setLoading(false));
        }
    };
    useEffect(()=>{
        if(!clinicId) return;
        const displaySpec = async()=>{
            const specData = await getSepcialization(clinicId);
            if(specData){
                setSpec(specData);
                console.log("clinic",clinicId)
                console.log("special",specData)
            }
        }
        displaySpec();
    },[clinicId])
    
    return(
        <Card style={{border:'none',width:"100%"}}>
            <Card.Body className='d-flex flex-column align-items-center w-100' style={{padding:"30px"}}>
                <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-start w-100' style={{gap:"20px",color:"#384152"}}>
                    <h4 className='m-0 p-0'>{isEdit?"Edit Doctor":"Add Doctor"}</h4>
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
                            <Form.Control type='text' name='phone' value={formData.phone} onChange={handleChange}/>
                        </Form.Group>

                    </Form.Group>
                    <Form.Group className='d-flex align-items-center justify-content-between w-100' style={{gap:"10px"}}>
                        {/*Gender */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Sex*</Form.Label>
                            <Form.Select aria-label="Default select example" name='sex' value={formData.sex} onChange={handleChange} required>
                                <option value="">Select an option</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Form.Select>
                        </Form.Group>
                        {/*Speciality */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Speciality*</Form.Label>
                            <Form.Select aria-label="Default select example" name='speciality_id' value={formData.speciality_id} onChange={handleChange} required>
                                <option value="">Select a specialization</option>
                                {spec.map(s=><option value={s.id} key={s.id}>{s.name}</option>)}
                            </Form.Select>
                        </Form.Group>
                    </Form.Group>
                        
                    {/*Credentials */}
                    {!isEdit && <Form.Group className='d-flex align-items-center justify-content-center w-100' style={{gap:"10px"}}>
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

                    <Button 
                    type='submit' 
                    className="d-flex align-items-center justify-content-center" 
                    style={{width:"97px",height:"45px",backgroundColor:"#2F9CCA",border:"none"}}
                    disabled={loading?true:false}
                    >
                        {isEdit
                        ?(loading?"Saving":"Save")
                        :(loading?"Creating":"Create")
                        }
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}


export default DoctorForm