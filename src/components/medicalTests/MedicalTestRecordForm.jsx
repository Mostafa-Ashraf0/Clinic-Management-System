import { Card, Form, Button } from 'react-bootstrap';
import style from '../../assets/medicalTest/medicaTestRecordForm.module.css';

const MedicalTestRecordForm = ()=>{
    return(
        <Card className={style.card}>
            <Card.Body className={style.cardBody}>
                <div className={style.head}>
                    <h1>Add new record</h1>
                </div>
                <div className={style.testDetails}>
                    <h2>Test Details</h2>
                </div>
                <Form className={style.form}>
                    <Form.Group className={style.testInfo}>
                        <Form.Group className={style.testName}>
                            <Form.Label className={style.label}>Select Test:</Form.Label>
                            <Form.Select style={{height:'35px'}}/>
                        </Form.Group>
                        <Form.Group className={style.testCategory}>
                            <Form.Label className={style.label}>Category:</Form.Label>
                            <Form.Control style={{height:'35px'}}/>
                        </Form.Group>
                    </Form.Group>
                    <div className={style.paramHead}>
                        <span>Parameter</span>
                        <span>Value</span>
                        <span>Unit</span>
                        <span>Rate</span>
                    </div>
                    <Form.Group className={style.paramGroup}>
                        <span>param1</span>
                        <Form.Group className={style.value}>
                            <Form.Control style={{height:'35px'}}/>
                        </Form.Group>
                        <span>unit</span>
                        <span>rate</span>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
};


export default MedicalTestRecordForm;