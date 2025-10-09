import '../assets/userDropdown.css';
import { useSelector } from 'react-redux';
const UserDropdown = ()=>{
    const { dropdownViewd } = useSelector((state)=>state.header);
    return(
        <div className="user-drop-down" style={dropdownViewd?{display:"flex"}:{display:"none"}}>
            <span>Profile</span>
            <span>Settings</span>
            <span>Log out</span>
        </div>
    )
}

export default UserDropdown;