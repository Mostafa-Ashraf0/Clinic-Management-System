import { Card, Form, Button } from 'react-bootstrap';
import style from '../../assets/medicalTest/medicalTestForm.module.css';
import FormParamBox from './FormParamBox';
import { useEffect,useState } from 'react';
import { getCategories } from '../../features/medicalTests/getCategories';
import { addNewTestParams } from '../../features/medicalTests/addNewTest_params';
import { updateNewTestParams } from '../../features/medicalTests/update_test_params';
import { useSelector,useDispatch } from 'react-redux';
import { setIsVisible } from '../../features/medicalTests/medicalTestFormSlice';
import { setIsEditTest } from '../../features/medicalTests/medicalTestFormSlice';

const MedicalTestForm = ({onTestAdded})=>{
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const dispatch = useDispatch();
    const { isVisible } = useSelector((state)=>state.medicalTestForm);
    const { isEditTest } =  useSelector((state)=>state.medicalTestForm);
    const { editData } = useSelector((state)=>state.medicalTestForm);
    const [categories, setCategories] = useState([]);


    const [formData, setFormData] = useState({
            test_id: null,
            test_name: '',
            clinic_id: clinicId,
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

        });

        useEffect(() => {
            console.log(isEditTest, editData)
            if (!isEditTest || !editData?.test) return;

            setFormData({
                test_id: editData.test.id,
                test_name: editData.test.name,
                clinic_id: clinicId,
                category_id: editData.test.category.id,
                parameters: editData.params?.map(p => ({
                    id: p.id,
                    name: p.name,
                    unit_id: p.unit.id,
                    type: p.type,
                    min: p.min_value,
                    max: p.max_value
                })) || []
            });

        }, [isEditTest, editData, clinicId]);

    //submit
    const handleSubmit = async(e)=>{
        if(!clinicId) return;
        e.preventDefault();
        let success = false;
        if(isEditTest && editData){
            success = await updateNewTestParams(formData);
        }else{
            success = await addNewTestParams(formData);
        }
        console.log(formData);
        if(success){
            dispatch(setIsEditTest(false));
            dispatch(setIsVisible(false));  
            setFormData({
                test_id: null,
                test_name: '',
                clinic_id: clinicId,
                category_id: '',
                parameters: [{ 
                    name:'',
                    unit_id:'',
                    type:'',
                    min:'',
                    max:''
                    }]
                });
            onTestAdded();
        }
        }

    //cancel
    const handleCancel = ()=>{
        dispatch(setIsEditTest(false));
        dispatch(setIsVisible(false));
        setFormData({
        test_id: null,
        test_name: '',
        clinic_id: clinicId,
        category_id: '',
        parameters: [{ 
            name:'',
            unit_id:'',
            type:'',
            min:'',
            max:''
            }]
        });
    }

    //input change
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
            { name:'', unit_id:'', type:'', min:'', max:'' }
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
        const displayCategories = async()=>{
            const categoriesData = await getCategories(formData.clinic_id || 0);
            setCategories(categoriesData);
        }
        displayCategories();
    },[formData.clinic_id])


    return(
        <div className={style.container} style={(isVisible || isEditTest)?{display:'flex'}:{display:'none'}}>
        <Card className={style.card} style={{border:'none',display:'flex'}}>
            <Card.Body className={style.cardBody}>
                <div className={style.head}>
                    <h1>{isEditTest?"Edit Medical Test":"Create New Medical Test"}</h1>
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
                        <Button onClick={handleCancel} className={style.cancel}>Cancel</Button>
                        <Button type='submit'>{isEditTest?"Save":"Create Test"}</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        </div>
    )
};


export default MedicalTestForm;