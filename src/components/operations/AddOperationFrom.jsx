import { Card, Form, Button } from 'react-bootstrap';
import style from '../../assets/operations/operationsForm.module.css';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsVisible } from '../../features/operations/operationsFormSlice';
import {addNewOperation} from '../../features/operations/addNewOperation';
import { editOperation } from '../../features/operations/editOperation';
import { getOpsCategories } from '../../features/operations/getOpsCategory';
import { setIsEditOps, setGeneralLoading } from '../../features/operations/operationsFormSlice';

const AddOperationsForm = ({onTestAdded})=>{
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        clinic_id: clinicId,
        category_id: '',
    })

    //edit variables
    const isEdit = useSelector((state)=>state.operationsForm.isEditOps);
    const editData = useSelector((state)=>state.operationsForm.editDataOps);
    //edit state
    useEffect(()=>{
        if(isEdit && editData){
            setFormData({
                name: editData.name,
                category_id: editData.operations_category.id
            })
        }
    },[isEdit, editData])


    const handleSubmit = async(e)=>{
        if(!clinicId) return;
        e.preventDefault();
        dispatch(setGeneralLoading(true));
        let success = false;
        if(isEdit && editData){
            success = await editOperation(formData, editData.id)
        }else{
            success = await addNewOperation(formData)
        }
        if(success){
            dispatch(setIsEditOps(false));
            dispatch(setIsVisible(false));
            dispatch(setGeneralLoading(false));
            setFormData({
                name: '',
                clinic_id: clinicId,
                category_id: '',
                });
            onTestAdded();
        }
    }

    const handleCancel = ()=>{
        dispatch(setIsVisible(false));
        dispatch(setIsEditOps(false));
        setFormData({
        name: '',
        clinic_id: clinicId,
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
        if(!clinicId) return;
        const displayCategories = async()=>{
            const categoriesData = await getOpsCategories(clinicId);
            setCategories(categoriesData);
        }
        displayCategories();
    },[clinicId])

    
    return(
        <div className={style.container}>
        <Card className={style.card} style={{border:'none',display:'flex'}}>
            <Card.Body className={style.cardBody}>
                <div className={style.head}>
                    <h1>{isEdit?"Edit Operation":"Create New Operation"}</h1>
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
                        <Button type='submit'>{isEdit?"Save":"Create"}</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        </div>
    )
};


export default AddOperationsForm;