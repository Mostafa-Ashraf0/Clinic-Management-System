import '../assets/header.css';
import { icons } from '../assets/icons';
import { setMobileVisible } from '../features/dashboard/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = ()=>{
    const { mobileVisible } = useSelector((state)=>state.sidebar);
    const dispatch = useDispatch();
    const handleBurgerClick = ()=>{
        dispatch(setMobileVisible(!mobileVisible));
    }
    return(
        <>
        <header>
            <img className='sideBar-icon' src={icons.header.sidebar} alt='sidebar' onClick={handleBurgerClick}/>
            <div className="user">
                <img className='userImg' src={icons.header.admin} alt="u-icon" />
                <span>Hi, Admin</span>
            </div>
        </header>
        </>
    )
}

export default Header;