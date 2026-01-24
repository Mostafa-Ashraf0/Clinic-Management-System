import { Card, Form, Button } from 'react-bootstrap';
import style from '../../assets/medicalTest/medicalTestForm.module.css';
import FormParamBox from './FormParamBox';

const MedicalTestForm = ()=>{
    return(
        <Card className={style.card} style={{border:'none'}}>
            <Card.Body className={style.cardBody}>
                <div className={style.head}>
                    <h1>Create New Medical Test</h1>
                </div>
                <Form className={style.form}>
                    <Form.Group className={style.group}>
                        <Form.Label>Test Name *</Form.Label>
                        <Form.Control
                        type='text'
                        required/>
                    </Form.Group>
                    <Form.Group className={style.group}>
                        <Form.Label>Clinic *</Form.Label>
                        <Form.Select
                        required/>
                    </Form.Group>
                    <Form.Group className={style.group}>
                        <Form.Label>Category *</Form.Label>
                        <Form.Select
                        required/>
                    </Form.Group>
                    <div className={style.param}>
                        <h1>Parameters</h1>
                        <FormParamBox/>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
};


export default MedicalTestForm;