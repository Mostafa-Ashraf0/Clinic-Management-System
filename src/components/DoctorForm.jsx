import {Card, Form, Button, FormGroup} from 'react-bootstrap';


const DoctorForm = ()=>{
    return(
        <Card>
            <Card.Body className='d-flex flex-column align-items-center' style={{height:"550px",padding:"30px"}}>
                <Form className='d-flex flex-column align-items-start' style={{gap:"20px",width:"560px",color:"#384152"}}>
                    <h4 className='m-0 p-0'>Add Doctor</h4>
                    <Form.Group className='d-flex align-items-center justify-content-center' style={{width:"560px", gap:"10px"}}>
                        {/*First Name */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>First Name*</Form.Label>
                            <Form.Control type='text'/>
                        </Form.Group>
                        {/*Last Name */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Last Name*</Form.Label>
                            <Form.Control type='text'/>

                        </Form.Group>
                    </Form.Group>

                    <Form.Group className='d-flex align-items-center justify-content-center' style={{width:"560px", gap:"10px"}}>
                        {/*Email */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Email*</Form.Label>
                            <Form.Control type='text'/>
                        </Form.Group>
                        {/*Phone */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Phone*</Form.Label>
                            <Form.Control type='text'/>
                        </Form.Group>

                    </Form.Group>
                    <Form.Group className='d-flex align-items-center justify-content-center' style={{width:"560px", gap:"10px"}}>
                        {/*Role */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Role</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="">Select an option</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </Form.Select>
                        </Form.Group>
                        {/*Speciality */}
                        <Form.Group className='d-flex flex-column align-items-start w-50' style={{height:"64px"}}>
                            <Form.Label>Speciality</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="">Select an option</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </Form.Select>
                        </Form.Group>
    
                    </Form.Group>
                        {/*Gender */}
                        <Form.Group>
                            <Form.Group className='d-flex flex-column align-items-start' style={{width:"560px",height:"64px"}}>
                                <Form.Label>Gender</Form.Label>
                                <Form.Select aria-label="Default select example">
                                <option value="">Select an option</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Form.Select>
                            </Form.Group>
                        </Form.Group>

                    <Button className="d-flex align-items-center justify-content-center" style={{width:"97px",height:"45px",backgroundColor:"#2F9CCA",border:"none"}}>Save</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}


export default DoctorForm