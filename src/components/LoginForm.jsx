import {Card, Form, Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authThunk';
import { useNavigate,useLocation } from 'react-router-dom';
import style from '../assets/loginForm.module.css';
import { Icons } from 'react-toastify';
import { icons } from '../assets/icons';

const LoginForm = ()=>{
    const [user, setUser] = useState({
        account: '',
        password: ''
    })

    const dispatch = useDispatch();
    const {loading, session} = useSelector((state)=>state.auth);
    const navigate = useNavigate();
    const location = useLocation();
    const adminText = 'Demo Account (Admin)';

    const handleSubmit = (e)=>{
        e.preventDefault();
        const userData = {
        email: user.account,
        password: user.password
        }
        dispatch(loginUser({email:userData.email,pass: userData.password}));
    }

    const handleChange = (e) => {
    setUser((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
    }));
    };

    const AdminClick = ()=>{
        setUser({
            account: 'mostafa_ashraf@admin.com',
            password: '123456'
        })
    }

    
    useEffect(() => {
        if (session && location.pathname === "/") {
            navigate("/Dashboard");
        }
    }, [session, navigate, location.pathname]);
     //rule of all variables used in useeffect must be written in dependancies
    
    return(
        <Card className={`${style.main} p-0`}  style={{border:'none'}}>
            <Card.Body className={`${style.body} d-flex flex-column align-items-start justify-content-center w-100`}>
                <Card.Title className='fs-3 mb-1'>Log In</Card.Title>
                <p>Enter your credentials to login to your account</p>
                <Form onSubmit={handleSubmit} className='w-100'>
                    <Form.Group className='d-flex flex-column align-items-start mb-3'>
                        <Form.Label className='fw-semibold'>User name</Form.Label>
                        <Form.Control 
                        className='p-2 rounded-3' 
                        name='account'
                        type='email' 
                        placeholder='Enter user name' 
                        onChange={handleChange}
                        value={user.account}
                        autoComplete='email'/>
                    </Form.Group>
                    <Form.Group className='d-flex flex-column align-items-start mb-4'>
                        <Form.Label className='fw-semibold'>Password</Form.Label>
                        <Form.Control 
                        className='p-2 rounded-3' 
                        name='password'
                        type='password' 
                        onChange={handleChange}
                        value={user.password}
                        placeholder='Enter password' />
                    </Form.Group>
                    <Button style={{backgroundColor:'rgb(74, 144, 226)'}} variant="primary" type="submit" className='w-100 p-2 rounded-3 mb-3'>{loading?"Logging in..":"Log in"}</Button>
                    <span className='mb-3'>or</span>
                    <Button className={`${style.adminBtn} w-100 p-2 rounded-3 mb-3`} onClick={AdminClick}>
                        <img src={icons.public.user}/>
                        {adminText} 
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
};

export default LoginForm;