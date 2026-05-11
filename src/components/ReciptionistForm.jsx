import {Card, Form, Button, FormGroup} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { AddRecip } from '../features/receptionist/addReceptionist';
import { useSelector, useDispatch } from 'react-redux';
import { setIsEditRecip, setLoading } from '../features/receptionist/reciptionistSlice';
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


        const handleSubmit = async (e) => {
            e.preventDefault();

            if (!clinicId) return;

            try {
                dispatch(setLoading(true));

                if (isEdit && editData) {
                    await editRecip(formData, setSubmited, editData.id);
                    dispatch(setIsEditRecip(false));
                } else {
                    await AddRecip(formData, setSubmited);
                }

            } catch (error) {
                console.error(error);
                alert("Something went wrong");

            } finally {
                dispatch(setLoading(false));
            }
        };


    return(
        <Card style={{border:"none", width:"100%"}}>
            <Card.Body className='d-flex flex-column align-items-center w-100' style={{padding:"30px"}}>
                <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-start w-100' style={{gap:"20px",color:"#384152"}}>
                    <h4 className='m-0 p-0'>{isEdit?"Edit Receptionist":"Add Receptionist"}</h4>
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
                    style={{width:"97px",height:"45px",backgroundColor:"#2F9CCA",border:"none"}}>
                        {isEdit?"Save":"Create"}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}


export default ReciptionistForm