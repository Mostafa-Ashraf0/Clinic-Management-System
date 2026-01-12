import { Card, Form, Button } from 'react-bootstrap';
import style from '../assets/tagsForm.module.css';
import { setIsVisible } from '../features/emr/tagsFormSlice';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { addNewTag } from '../features/emr/addNewTag';
import { editTag } from '../features/emr/editTag';
import { deleteTag } from '../features/emr/deleteTag';
import { Icons } from 'react-toastify';
import { icons } from '../assets/icons';

const TagsForm = ({onTagAdded, formAction, data})=>{
    const {patientId} = useParams();
    const [tagData, setTagData] = useState({
        patient_id: null,
        tag: '',
        priority: ''
    });

    useEffect(()=>{
        if(formAction === "edit" && data){
            setTagData({
                patient_id: Number(patientId),
                tag: data.tag,
                priority: data.priority,
                id: data.id
            })
        }
    },[formAction, data, patientId])

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
        if(formAction === "edit"){
            await editTag(tagData);
        }else{
            await addNewTag(tagData);
        }
        setTagData({
            patient_id: Number(patientId),
            tag: '',
            priority: ''
        })
        onTagAdded();
        dispatch(setIsVisible(false));
    }

    const handleDelete = async()=>{
        await deleteTag(tagData);
        dispatch(setIsVisible(false));
        setTagData(prev=>({
            ...prev,
            tag: '',
            priority: ''
        }));
        onTagAdded();
    }

    const handleCancel = ()=>{
        dispatch(setIsVisible(false));
        setTagData(prev=>({
            ...prev,
            tag: '',
            priority: ''
        }))
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
                        value={tagData.tag}
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
                        value={tagData.priority}
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
                        <Button className={style.cancelBtn} onClick={handleCancel}>Cancel</Button>
                        <Button type='submit' className={style.addBtn}>
                            {formAction==="add"?"Add Tag":"Edit"}
                        </Button>
                        <Button className={style.deleteBtn}
                        onClick={handleDelete}
                        style={formAction === "add"? {display:'none'}:{display:'flex'}}>
                            <img src={icons.tags.delete} alt="D" />
                        </Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </div>
    )
};

export default TagsForm;