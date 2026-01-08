import { Card, Form, Button } from 'react-bootstrap';
import style from '../assets/tagsForm.module.css';

const TagsForm = ()=>{
    const priority ={
        high: 'high priority',
        low: 'low priority',
        medium: 'medium priority'
    }
    return(
        <div className={style.container} style={{display:'none'}}>
        <Card className={style.card}>
            <Card.Body>
                <Form className={style.form}>
                    <Form.Group className={style.group}>
                        <Form.Label className={style.label}>Content</Form.Label>
                        <Form.Control
                        type="text"
                        name="tag"
                        />
                    </Form.Group>
                    <Form.Group className={style.group}>
                        <Form.Label className={style.label}>Priority</Form.Label>
                        <Form.Select
                        name="priority">
                            <option value="">Select Priority</option>
                            {Object.entries(priority).map(([key, value])=>
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            )}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className={style.btns}>
                        <Button className={style.cancelBtn}>Cancel</Button>
                        <Button className={style.addBtn}>Add Tag</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </div>
    )
};

export default TagsForm;