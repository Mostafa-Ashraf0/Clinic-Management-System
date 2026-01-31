import { Card, Form, Button } from 'react-bootstrap';
import style from '../../assets/medicalTest/medicalTestForm.module.css';
import FormParamBox from './FormParamBox';
import { useEffect,useState } from 'react';
import { getClinic } from '../../features/getClinic';
import { getCategories } from '../../features/medicalTests/getCategories';
import { addNewTestParams } from '../../features/medicalTests/addNewTest_params';
const MedicalTestForm = ()=>{
    const [clinic, setClinic] = useState([]);
    const [categories, setCategories] = useState([]);
    const [submited, setSubmited] = useState(false);
    const [formData, setFormData] = useState({
            test_name: '',
            clinic_id: '',
            category_id: '',
            parameters: [
                { 
                    name:'',
                    unit_id:'',
                    type:'',
                    min:'',
                    max:''
                }
            ]

        })
    useEffect(()=>{
        setFormData({
        test_name: '',
        clinic_id: '',
        category_id: '',
        parameters: [{ 
            name:'',
            unit_id:'',
            type:'',
            min:'',
            max:''
            }]
        });
        setSubmited(false);
        },[submited])

    const handleSubmit = (e)=>{
            e.preventDefault();
            addNewTestParams(formData,setSubmited)
            console.log(formData);
        }
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }));
    };

    // Add new param
    const addParameter = () => {
        setFormData(prev => ({
            ...prev,
            parameters: [
            ...prev.parameters,
            { name:'', unit:'', type:'', min:'', max:'' }
            ]
        }));
    };

    //delete param
    const deleteParameter = (index) => {
        setFormData(prev => ({
            ...prev,
            parameters: prev.parameters.filter((_, i) => i !== index)
        }));
    };

    useEffect(()=>{
            const displayClinic = async()=>{
                const clinicData = await getClinic();
                setClinic(clinicData);
            }
            displayClinic();
        },[])
    useEffect(()=>{
        const displayCategories = async()=>{
            const categoriesData = await getCategories(formData.clinic_id || 0);
            setCategories(categoriesData);
        }
        displayCategories();
    },[formData.clinic_id])
    return(
        <Card className={style.card} style={{border:'none',display:'flex'}}>
            <Card.Body className={style.cardBody}>
                <div className={style.head}>
                    <h1>Create New Medical Test</h1>
                </div>
                <Form className={style.form} onSubmit={handleSubmit}>
                    <Form.Group className={style.group}>
                        <Form.Label>Test Name *</Form.Label>
                        <Form.Control
                        name='test_name'
                        value={formData.test_name}
                        onChange={handleChange}
                        type='text'
                        required/>
                    </Form.Group>
                    <Form.Group className={style.group}>
                        <Form.Label>Clinic *</Form.Label>
                        <Form.Select
                        aria-label="Default select example"
                        name='clinic_id'
                        value={formData.clinic_id}
                        onChange={handleChange}
                        required>
                            <option value="">Select an option</option>
                            {clinic.map(c=><option value={c.id} key={c.id}>{c.name}</option>)}
                        </Form.Select>    
                    </Form.Group>
                    <Form.Group className={style.group}>
                        <Form.Label>Category *</Form.Label>
                        <Form.Select
                        aria-label="Default select example"
                        name='category_id'
                        value={formData.category_id}
                        onChange={handleChange}
                        required>
                            <option value="">Select an option</option>
                            {categories.map(c=><option value={c.id} key={c.id}>{c.name}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <div className={style.param}>
                        <h1>Parameters</h1>
                    </div>
                    <div className={style.paramsArea}>
                        {formData.parameters.map((param,index)=>(
                            <FormParamBox
                                key={index}
                                index={index}
                                clinicId={formData.clinic_id}
                                paramData={param}
                                setParam={(updatedParam) => {
                                setFormData(prev => {
                                    const newParams = [...prev.parameters];
                                    newParams[index] = updatedParam;
                                    return { ...prev, parameters: newParams };
                                });
                                }}
                                removeParam = {()=>deleteParameter(index)}
                            />
                        ))}
                    </div>
                    <div className={style.newParam}>
                        <Button onClick={addParameter}>Add Parameter</Button>
                    </div>
                    <div className={style.submitBox}>
                        <Button type='submit'>Create Test</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
};


export default MedicalTestForm;