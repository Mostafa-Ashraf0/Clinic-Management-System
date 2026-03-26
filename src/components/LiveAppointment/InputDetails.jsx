import { Card, Form, Button } from 'react-bootstrap';
import { updateInput } from '../../features/liveDashboard/updateInput';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const InputDetails = ({inputType})=>{
    const {appointmentId} = useParams();
    const [inputData, setInputData] = useState(null);

    const handleChange = (e)=>{
        const value = e.target.value
        setInputData(value);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!inputData) return;

        const res = await updateInput(appointmentId, inputType, inputData);
        if(res){
            setInputData(res);
        }
        
    }
    return(
        <Card style={{marginBottom: '30px'}}>
            <Card.Body className="d-flex flex-column align-items-center">
                <Form className='w-100 d-flex align-items-start gap-5' onSubmit={handleSubmit}>
                    <Form.Group className='w-100 d-flex flex-column align-items-start' style={{color: 'rgb(102, 116, 140)'}}>
                        <Form.Label>{inputType==="chief_complaint"?"Current Complaint":"Doctor Notes"}</Form.Label>
                        <Form.Control
                        onChange={handleChange}
                        className='w-100'
                        as="textarea" 
                        rows={3}
                        name='notes'
                        />
                    </Form.Group>
                    <Button className='align-self-end' type='submit'>Save</Button>
                </Form>
            </Card.Body>
        </Card>
    )
};

export default InputDetails;