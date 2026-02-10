import { useEffect, useState } from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import style from '../../assets/medicalFiles/fileUpload.module.css';
import { useParams } from 'react-router-dom';
import { uploadFile } from '../../features/medicalFiles/uploadFile';

const FileUploadForm = ()=>{
    const {patientId} = useParams();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        file: '',
        notes: ''
    });

    useEffect(()=>{
        console.log(formData)
    },[formData])

    const handleChange = (e)=>{
        const { name, value, files } = e.target;
        if (name === "file") {
            setFormData(prev => ({
            ...prev,
            file: files[0]
            }));
        } else {
            setFormData(prev => ({
            ...prev,
            [name]: value
            }));
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setLoading(true);
        const success = await uploadFile(formData, patientId);
        if(success){
            setFormData({
            file: '',
            notes: ''
            })
            setLoading(false);
            document.querySelector('input[name="file"]').value = null;
        }
    }

    return(
        <Card>
            <Card.Body>
                <Form className={style.form} onSubmit={handleSubmit}>
                    <Form.Group className={style.group}>
                        <Form.Label>Upload File</Form.Label>
                        <Form.Control 
                        type='file'
                        name='file'
                        accept=".jpg,.jpeg,.png"
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>
                    <Form.Group className={style.group}>
                        <Form.Label>Notes</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={3}
                        name='notes'
                        value={formData.notes || ''}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Button type='submit' disabled={loading}>
                        {loading?'Uploading...':'Submit'}
                        </Button>
                </Form>
            </Card.Body>
        </Card>
    )
};

export default FileUploadForm