import { Card, Form, Button } from 'react-bootstrap';
import style from '../assets/tagsForm.module.css';

const TagsForm = ()=>{
    return(
        <Card className={style.card} style={{display:'none'}}>
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
                            <option>high</option>
                            <option>medium</option>
                            <option>low</option>
                        </Form.Select>
                    </Form.Group>
                    <Button className={style.button}>Add Tag</Button>
                </Form>
            </Card.Body>
        </Card>
    )
};

export default TagsForm;