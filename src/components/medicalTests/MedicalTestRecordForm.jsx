import { Card, Form, Button } from 'react-bootstrap';
import style from '../../assets/medicalTest/medicaTestRecordForm.module.css';
import { useEffect, useState } from 'react';
import { getTestsByCategory } from '../../features/emr/getTestsByCategory';
import { getTestParams } from '../../features/emr/getTestParams';
const MedicalTestRecordForm = ()=>{
    const [testsData, setTestsData] = useState([]);
    const [params, setParams] = useState([]);
    const [currentTest, setCurrentTest] = useState(null);
    useEffect(()=>{
        const fetchTests = async()=>{
            const data = await getTestsByCategory();
            if (data) {
            setTestsData(data);
            }
        }
        fetchTests();
    },[])

    const handleTestChange = (e)=>{
        const selectedId = e.target.value; 
        const selectedTest = testsData.find(t => t.id === parseInt(selectedId));
        if (selectedTest) {
            setCurrentTest(selectedTest);
            const fetchParams = async()=>{
            const data = await getTestParams(selectedTest.id);
            if (data) {
            setParams(data);
            }
        }
        fetchParams();
        } else {
            setCurrentTest('');
        }
    }
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
                            <Form.Select
                            style={{height:'35px'}}
                            onChange={handleTestChange}>
                                <option value=""></option>
                                {testsData.map(d=>(
                                    <option 
                                    key={d.id}
                                    value={d.id}
                                    category={d.category.name}>{d.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className={style.testCategory}>
                            <Form.Label className={style.label}>Category:</Form.Label>
                            <Form.Control
                            style={{height:'35px'}}
                            value={currentTest?currentTest.category.name:""}
                            readOnly/>
                        </Form.Group>
                    </Form.Group>
                    <div className={style.paramHead}>
                        <span>Parameter</span>
                        <span>Value</span>
                        <span>Unit</span>
                        <span>Rate</span>
                    </div>
                    {params.map(p=>(
                        <Form.Group key={p.id} className={style.paramGroup}>
                            <span>{p.name}</span>
                            <Form.Group className={style.value}>
                                <Form.Control style={{height:'35px'}}/>
                            </Form.Group>
                            <span>{p.unit.name}</span>
                            <span>{p.min_value} - {p.max_value}</span>
                        </Form.Group>
                    ))}
                </Form>
            </Card.Body>
        </Card>
    )
};


export default MedicalTestRecordForm;