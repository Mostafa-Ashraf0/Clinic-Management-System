import {Card, Form, Button} from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authThunk';
import { useNavigate,useLocation } from 'react-router-dom';

const LoginForm = ()=>{
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    const {loading, session} = useSelector((state)=>state.auth);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = (e)=>{
        const userData = {
        email: emailRef.current.value,
        password: passwordRef.current.value
        }
        e.preventDefault();
        dispatch(loginUser({email:userData.email,pass: userData.password}));
    }

    
    useEffect(() => {
        if (session && location.pathname === "/") {
            navigate("/Dashboard");
        }
    }, [session, navigate, location.pathname]);
     //rule of all variables used in useeffect must be written in dependancies
    
    return(
        <Card className='w-50 h-100 p-0'>
            <Card.Body className='d-flex flex-column align-items-start justify-content-center w-100' style={{padding:'150px'}}>
                <Card.Title className='fs-3 mb-1'>Log In</Card.Title>
                <p style={{fontWeight:'400', marginBottom:'30px'}}>Enter your credentials to login to your account</p>
                <Form onSubmit={handleSubmit} className='w-100'>
                    <Form.Group className='d-flex flex-column align-items-start mb-3'>
                        <Form.Label className='fw-semibold'>User name</Form.Label>
                        <Form.Control className='p-2 rounded-3' type='email' placeholder='Enter user name' ref={emailRef} autoComplete='email'/>
                    </Form.Group>
                    <Form.Group className='d-flex flex-column align-items-start mb-4'>
                        <Form.Label className='fw-semibold'>Password</Form.Label>
                        <Form.Control className='p-2 rounded-3' type='password' placeholder='Enter password' ref={passwordRef}/>
                    </Form.Group>
                    <Button style={{backgroundColor:'rgb(74, 144, 226)'}} variant="primary" type="submit" className='w-100 p-2 rounded-3'>{loading?"Logging in..":"Log in"}</Button>
                </Form>
            </Card.Body>
        </Card>
    )
};

export default LoginForm;