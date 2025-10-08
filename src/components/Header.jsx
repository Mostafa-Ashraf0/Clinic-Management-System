import '../assets/header.css';
import { icons } from '../assets/icons';
const Header = ()=>{
    return(
        <header>
            <div className="drop-down">
                <span>Select Departement</span>
                <img className="dropdownIcon" src={icons.header.dropdown} alt="icon" />
            </div>
            <div className="user">
                <img className='userImg' src={icons.header.admin} alt="u-icon" />
                <span>Admin</span>
                <img className="dropdownIcon" src={icons.header.dropdown} alt="user" />
            </div>
        </header>
    )
}

export default Header;