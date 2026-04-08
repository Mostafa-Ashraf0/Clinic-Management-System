import { Card, Form, Button } from 'react-bootstrap';
import style from '../../assets/operations/operationsForm.module.css';
import {useState, useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setIsVisible } from '../../features/operations/operationsFormSlice';
import { getClinic } from '../../features/getClinic';
import {addNewOperation} from '../../features/operations/addNewOperation';
import { getOpsCategories } from '../../features/operations/getOpsCategory';

const AddOperationsForm = ({onTestAdded})=>{
    const dispatch = useDispatch();
    const [clinic, setClinic] = useState([]);
    const [categories, setCategories] = useState([]);
    const { isVisible } = useSelector((state)=>state.operationsForm)
    const [formData, setFormData] = useState({
        name: '',
        clinic_id: '',
        category_id: '',
    })


    const handleSubmit = async(e)=>{
        e.preventDefault();
        const success = await addNewOperation(formData)
        console.log(formData);
        if(success){
            dispatch(setIsVisible(false));
            setFormData({
                name: '',
                clinic_id: '',
                category_id: '',
                });
            onTestAdded();
        }
    }

    const handleCancel = ()=>{
        dispatch(setIsVisible(false));
        setFormData({
        name: '',
        clinic_id: '',
        category_id: '',
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

    useEffect(()=>{
        const displayCategories = async()=>{
            const categoriesData = await getOpsCategories(formData.clinic_id || 0);
            setCategories(categoriesData);
        }
        displayCategories();
    },[formData.clinic_id])

    
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
                        name='name'
                        value={formData.name}
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