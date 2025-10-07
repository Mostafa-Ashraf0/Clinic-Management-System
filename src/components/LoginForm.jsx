import {Card, Form, Button} from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authThunk';
import { useNavigate } from 'react-router-dom';
const LoginForm = ()=>{
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();
    const {loading, error,user} = useSelector((state)=>state.auth);
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        dispatch(loginUser({email,pass: password}));
    }
    useEffect(()=>{
        if(user){
            navigate("/Dashboard");
        }
    },[user,navigate]) //rule of all variables used in useeffect must be written in dependancies
    
    return(
        <Card style={{ width: "380px", padding: "20px" }} className="">
            <Card.Body>
                <Card.Title className='fs-3 mb-3'>Log In</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='d-flex flex-column align-items-start mb-3'>
                        <Form.Label >User name</Form.Label>
                        <Form.Control type='email' placeholder='Enter user name' ref={emailRef} autoComplete='email'/>
                    </Form.Group>
                    <Form.Group className='d-flex flex-column align-items-start mb-4'>
                        <Form.Label >Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' ref={passwordRef}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='w-100'>{loading?"Logging in..":"Log in"}</Button>
                </Form>
            </Card.Body>
            {error && alert(error)}
        </Card>
    )
};

export default LoginForm;