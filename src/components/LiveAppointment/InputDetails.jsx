import { Card, Form, Button } from 'react-bootstrap';

const InputDetails = ()=>{
    return(
        <Card style={{marginBottom: '30px'}}>
            <Card.Body className="d-flex flex-column align-items-center">
                <Form className='w-100 d-flex align-items-start gap-5'>
                    <Form.Group className='w-100 d-flex flex-column align-items-start' style={{color: 'rgb(102, 116, 140)'}}>
                        <Form.Label>Current Complaint</Form.Label>
                        <Form.Control
                        className='w-100'
                        as="textarea" 
                        rows={3}
                        name='notes'
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button className='align-self-end'>Save</Button>
                </Form>
            </Card.Body>
        </Card>
    )
};

export default InputDetails;