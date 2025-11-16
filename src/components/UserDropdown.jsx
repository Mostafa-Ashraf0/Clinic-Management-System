import '../assets/userDropdown.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import supabase from '../utils/supabase';
const UserDropdown = ()=>{
    const navigate = useNavigate();
    const { dropdownViewd } = useSelector((state)=>state.header);
    const {session} = useSelector((state)=>state.auth);
    const handleLogout = async()=>{
        await supabase.auth.signOut();
        if(!session){
            navigate("/");
        }
    }
    return(
        <div className="user-drop-down" style={dropdownViewd?{display:"flex"}:{display:"none"}}>
            <span>Profile</span>
            <span>Settings</span>
            <span onClick={handleLogout}>Log out</span>
        </div>
    )
}

export default UserDropdown;