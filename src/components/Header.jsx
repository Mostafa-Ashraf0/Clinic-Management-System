import '../assets/header.css';
import { icons } from '../assets/icons';
import { useSelector,useDispatch } from 'react-redux';
import {setDropdown} from "../features/dashboard/headerSlice";
import UserDropdown from './UserDropdown';
const Header = ()=>{
    const dispatch = useDispatch();
    const { dropdownViewd } = useSelector((state)=>state.header);
    const handleClick = ()=>{
        if(!dropdownViewd){
            dispatch(setDropdown(true));
        }else{
            dispatch(setDropdown(false));
        }
    }
    return(
        <>
        <header>
            <div className="drop-down">
                <span>Select Departement</span>
                <img className="dropdownIcon" src={icons.header.dropdown} alt="icon" />
            </div>
            <div className="user" onClick={handleClick}>
                <img className='userImg' src={icons.header.admin} alt="u-icon" />
                <span>Admin</span>
                <img className="dropdownIcon" src={icons.header.dropdown} alt="user" />
            </div>
            {dropdownViewd && <UserDropdown/>}
        </header>
        </>
    )
}

export default Header;