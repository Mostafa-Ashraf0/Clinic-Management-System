import { Card, Form, Button } from 'react-bootstrap';
import style from '../../assets/medicalTest/medicaTestRecordForm.module.css';
import { useEffect, useState } from 'react';
import { getTestsByCategory } from '../../features/emr/getTestsByCategory';
import { getTestParams } from '../../features/emr/getTestParams';
import { addTestResult } from '../../features/emr/addTestResult';

const MedicalTestRecordForm = ()=>{
    const [testsData, setTestsData] = useState([]);
    const [params, setParams] = useState([]);
    const [currentTest, setCurrentTest] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
                test_id: '',
                patient_id: '',
                date: '',
                notes: '',
                parameters: [
                    { 
                        param_id:'',
                        data_type:''
                    }
                ]
    
            });

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }));
    };

    const handleParamChange = (e)=>{
        const { name, value, type } = e.target;
        setFormData((prev)=>({
            ...prev,
            parameters:[
                ...prev,
                {
                    [name]:value,
                    data_type: type
                }
            ]
        }));
    }


    useEffect(()=>{
        const fetchTests = async()=>{
            const data = await getTestsByCategory();
            if (data) {
            setTestsData(data);
            }
        }
        fetchTests();
    },[])

    const fetchParams = async (testId) => {
    const data = await getTestParams(testId);
    return data || [];
    };

    const handleTestChange = async(e)=>{
        const selectedId = e.target.value; 
        if(!selectedId){
            setCurrentTest(null);
            setParams([]);
            return
        }
        const selectedTest = testsData.find(t => t.id === parseInt(selectedId));
        if (!selectedTest) {
            setCurrentTest(null);
            setParams([]);
            return;
        }

        setCurrentTest(selectedTest);
        setFormData((prev)=>({
            ...prev, 
            'test_id':selectedId
        }))

        const data = await fetchParams(selectedTest.id);
        setParams(data);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        //addTestResult(formData, setSubmitted);
        console.log(formData)
    }

    return(
        <Card className={style.card}>
            <Card.Body className={style.cardBody}>
                <div className={style.head}>
                    <h1>Medical Test Record Form</h1>
                </div>
                <div className={style.testDetails}>
                    <h2>Test Details</h2>
                </div>
                <Form className={style.form} onSubmit={handleSubmit}>
                    <Form.Group className={style.testInfo}>
                        <Form.Group className={style.testName}>
                            <Form.Label className={style.label}>Select Test:</Form.Label>
                            <Form.Select
                            style={{height:'35px'}}
                            name='test_id'
                            onChange={handleTestChange}>
                                <option value="">select</option>
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
                    <Form.Group className={style.recordView}>
                        <div className={style.paramHead} style={params.length>0?{display:'flex'}:{display:'none'}}>
                            <span>Parameter</span>
                            <span>Value</span>
                            <span>Unit</span>
                            <span>Reference Range</span>
                        </div>
                        {params.map(p=>(
                            <Form.Group key={p.id} className={style.paramGroup}>
                                <span>{p.name}</span>
                                <Form.Group className={style.value}>
                                    <Form.Control
                                    type={p.type==='Numeric'?'number':'text'}
                                    name='param_id'
                                    onChange={handleParamChange}
                                    style={{height:'35px'}}
                                    required/>
                                </Form.Group>
                                <span>{p.unit.name}</span>
                                <span>{p.min_value} - {p.max_value}</span>
                            </Form.Group>
                        ))}
                    </Form.Group>
                    <Form.Group className={style.moreInfo}>
                        <div className={style.moreDetails}>
                            <h2>Additional Information</h2>
                        </div>
                        <Form.Group className={style.date}>
                            <Form.Label>Test Date:</Form.Label>
                            <Form.Control
                            onChange={handleChange}
                            name='date'
                            type='date'
                            required/>
                        </Form.Group>
                        <Form.Group className={style.note}>
                            <Form.Label>Notes:</Form.Label>
                            <Form.Control
                            className={style.noteIn}
                            name='notes'
                            onChange={handleChange}
                            as="textarea" 
                            rows={3}/>
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className={style.btns}>
                        <Button className={style.cancel}>Cancel</Button>
                        <Button type='submit'>Add Record</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
};


export default MedicalTestRecordForm;