import LoginForm from "../components/LoginForm";
import doctorImg from '../assets/doctorLoginImage.jpeg';
import '../assets/loginPage.css';
const LoginPage = ()=>{
    
    return(
        <div className="login-page" data-testid="login-page">
            <div className="left">
                <img src={doctorImg} alt=""/>
                <div className="desc">
                    <div className="card">
                        <span className="normal">Welcome to <span className="large">Clinic Care Group</span></span>
                        <span className="system">Clinic Management System</span>
                        <p>Cloud based clinic management system with centralized user friendly platform</p>
                    </div>
                </div>
            </div>
            <LoginForm/>
        </div>
    )
};

export default LoginPage;