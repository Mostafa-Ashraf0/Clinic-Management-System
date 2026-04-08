import { Card, Form, Button } from 'react-bootstrap';
import style from '../../assets/medicalTest/medicalTestForm.module.css';
import {useState, useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setIsVisible } from '../../features/operations/operationsFormSlice';
import { getClinic } from '../../features/getClinic';


const AddOperationsForm = ()=>{
    const dispatch = useDispatch();
    const [clinic, setClinic] = useState([]);
    const { isVisible } = useSelector((state)=>state.operationsForm)
    const [formData, setFormData] = useState({
            name: '',
            clinic_id: '',
            category_id: '',
        })


    const handleSubmit = async(e)=>{
            e.preventDefault();
            console.log(formData);
            /*if(success){
                dispatch(setIsVisible(false));
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
                onTestAdded();
            }*/
        }
    const handleCancel = ()=>{
        dispatch(setIsVisible(false));
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
    }
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }));
    };

    useEffect(()=>{
        const displayClinic = async()=>{
            const clinicData = await getClinic();
            setClinic(clinicData);
        }
        displayClinic();
    },[])


    
    return(
        <div className={style.container} style={isVisible?{display:'flex'}:{display:'none'}}>
        <Card className={style.card} style={{border:'none',display:'flex'}}>
            <Card.Body className={style.cardBody}>
                <div className={style.head}>
                    <h1>Create New Operation</h1>
                </div>
                <Form className={style.form} onSubmit={handleSubmit}>
                    <Form.Group className={style.group}>
                        <Form.Label>Operation Name *</Form.Label>
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
                        </Form.Select>
                    </Form.Group>
                    <div className={style.submitBox}>
                        <Button onClick={handleCancel} className={style.cancel}>Cancel</Button>
                        <Button type='submit'>Create</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        </div>
    )
};


export default AddOperationsForm;