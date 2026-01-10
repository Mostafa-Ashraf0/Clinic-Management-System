import { Card, Form, Button } from 'react-bootstrap';
import style from '../assets/tagsForm.module.css';
import { setIsVisible } from '../features/emr/tagsFormSlice';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { addNewTag } from '../features/emr/addNewTag';

const TagsForm = ({onTagAdded})=>{
    const {patientId} = useParams();
    const [tagData, setTagData] = useState({
        patient_id: null,
        tag: '',
        priority: ''
    });

    useEffect(() => {
    if (patientId) {
        setTagData(prev =>({
        ...prev,
        patient_id: Number(patientId)
        }));
    }
    }, [patientId]);

    const dispatch = useDispatch();
    const { isVisible } = useSelector((state)=>state.tagsForm)
    const priority ={
        low: 'low priority',
        medium: 'medium priority',
        high: 'high priority'
    }

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setTagData(prev=>({
            ...prev,
            [name]:value
        }))
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!tagData.patient_id) return;
        await addNewTag(tagData);
        setTagData(prev=>({
            ...prev,
            tag: '',
            priority: ''
        }))
        onTagAdded();
        dispatch(setIsVisible(false));
    }

    return(
        <div className={style.container} style={isVisible?{display:'flex'}:{display:'none'}}>
        <Card className={style.card}>
            <Card.Body>
                <Form className={style.form} onSubmit={handleSubmit}>
                    <Form.Group className={style.group}>
                        <Form.Label className={style.label}>Content</Form.Label>
                        <Form.Control
                        type="text"
                        name="tag"
                        maxLength={30}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>
                    <Form.Group className={style.group}>
                        <Form.Label className={style.label}>Priority</Form.Label>
                        <Form.Select
                        name="priority"
                        onChange={handleChange}
                        required>
                            <option value="">Select Priority</option>
                            {Object.entries(priority).map(([key, value])=>
                                <option 
                                key={key} 
                                value={key}>
                                    {value}
                                </option>
                            )}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className={style.btns}>
                        <Button className={style.cancelBtn}>Cancel</Button>
                        <Button type='submit' className={style.addBtn}>Add Tag</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </div>
    )
};

export default TagsForm;