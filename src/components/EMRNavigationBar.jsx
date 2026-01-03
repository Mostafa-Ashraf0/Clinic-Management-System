import style from '../assets/emrNavigationBar.module.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EMRNavigationBar = ()=>{
    const {patientId} = useParams();
    const navigate = useNavigate();

    const handleNavHome = ()=>{
        navigate(`/patients/${patientId}/general`);
    }
    const handleNavMedical = ()=>{
        navigate(`/patients/${patientId}/medical`);
    }
    return(
        <nav>
            <div className={style.navBtns}>
                <span className={style.btn} onClick={handleNavHome}>Home</span>
                <span className={style.btn} onClick={handleNavMedical}>Medical Information</span>
                <span className={style.btn}>Files</span>
            </div>
        </nav>
    )
}

export default EMRNavigationBar